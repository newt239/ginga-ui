"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@ginga-ui/utils";
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
} from "react-aria-components";
import { Button } from "../button";
import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";

import type { Key } from "react-aria-components";

export type CodeBlockFile = {
  filename: string;
  code: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
};

export type CodeBlockProps = React.ComponentProps<"div"> &
  ElementRenderProps<"div"> & {
    code?: string;
    filename?: string;
    filenameIcon?: React.ReactNode;
    files?: CodeBlockFile[];
    filesLabel?: string;
    copyLabel?: string;
    copiedLabel?: string;
    copyIcon?: React.ReactNode;
    copiedIcon?: React.ReactNode;
  };

const CodeContent: React.FC<{
  file: CodeBlockFile;
  ref?: React.Ref<HTMLDivElement>;
}> = ({ file, ref }) => (
  <div ref={ref} className="ginga-code-block-content">
    {file.content ?? (
      <pre>
        <code>{file.code}</code>
      </pre>
    )}
  </div>
);

const FileLabel: React.FC<{ file: CodeBlockFile }> = ({ file }) => (
  <>
    {file.icon && (
      <span className="ginga-code-block-file-icon" aria-hidden="true">
        {file.icon}
      </span>
    )}
    <span className="ginga-code-block-file-name">{file.filename}</span>
  </>
);

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code = "",
  filename,
  filenameIcon,
  files,
  filesLabel = "Files",
  copyLabel = "Copy",
  copiedLabel = "Copied!",
  copyIcon,
  copiedIcon,
  className,
  children,
  render,
  ...props
}) => {
  const entries: CodeBlockFile[] = files ?? [
    { filename: filename ?? "", code, icon: filenameIcon, content: children },
  ];
  const [selectedKey, setSelectedKey] = useState<Key>(0);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const activeIndex = entries[Number(selectedKey)] ? Number(selectedKey) : 0;
  const activeFile = entries[activeIndex];
  const hasTabs = entries.length > 1;
  const canCopy = Boolean(activeFile?.code || activeFile?.content);

  useEffect(() => () => clearTimeout(copiedTimerRef.current), []);

  const handleCopy = async () => {
    const text = activeFile?.code || contentRef.current?.textContent || "";
    if (!text || !navigator?.clipboard?.writeText) return;
    clearTimeout(copiedTimerRef.current);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      setCopied(false);
      return;
    }
    setCopied(true);
    copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  const copyButton = canCopy && (
    <Button
      variant="ghost"
      size="sm"
      className="ginga-code-block-copy-button"
      onPress={handleCopy}
      startIcon={copied ? copiedIcon : copyIcon}
    >
      <span className="ginga-code-block-copy-label" aria-live="polite">
        {copied ? copiedLabel : copyLabel}
      </span>
    </Button>
  );

  const rootProps = { className: cn("ginga-code-block", className), ...props };

  if (!hasTabs && !activeFile?.filename) {
    return renderElement("div", render, {
      "data-headerless": true,
      ...rootProps,
      children: (
        <>
          {activeFile && <CodeContent ref={contentRef} file={activeFile} />}
          {copyButton}
        </>
      ),
    });
  }

  if (!hasTabs) {
    return renderElement("div", render, {
      ...rootProps,
      children: (
        <>
          <div className="ginga-code-block-header">
            {activeFile && (
              <span className="ginga-code-block-filename">
                <FileLabel file={activeFile} />
              </span>
            )}
            {copyButton}
          </div>
          {activeFile && <CodeContent ref={contentRef} file={activeFile} />}
        </>
      ),
    });
  }

  return renderElement("div", render, {
    ...rootProps,
    children: (
      <AriaTabs
        selectedKey={selectedKey}
        onSelectionChange={(key) => {
          setSelectedKey(key);
          clearTimeout(copiedTimerRef.current);
          setCopied(false);
        }}
      >
        <div className="ginga-code-block-header">
          <AriaTabList
            aria-label={filesLabel}
            className="ginga-code-block-tab-list"
          >
            {entries.map((file, index) => (
              <AriaTab
                key={file.filename}
                id={index}
                className="ginga-code-block-tab"
              >
                <FileLabel file={file} />
              </AriaTab>
            ))}
          </AriaTabList>
          {copyButton}
        </div>
        {entries.map((file, index) => (
          <AriaTabPanel
            key={file.filename}
            id={index}
            className="ginga-code-block-tab-panel"
          >
            <CodeContent
              ref={index === activeIndex ? contentRef : undefined}
              file={file}
            />
          </AriaTabPanel>
        ))}
      </AriaTabs>
    ),
  });
};
