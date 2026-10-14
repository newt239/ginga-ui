"use client";

import { useState } from "react";

import { cn } from "@ginga-ui/utils";
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
} from "react-aria-components";
import { Button } from "../button";
import "./index.css";

import type { Key } from "react-aria-components";

export type CodeBlockFile = {
  filename: string;
  code: string;
  content?: React.ReactNode;
};

export type CodeBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  code?: string;
  filename?: string;
  files?: CodeBlockFile[];
  filesLabel?: string;
  copyLabel?: string;
  copiedLabel?: string;
  copyIcon?: React.ReactNode;
  copiedIcon?: React.ReactNode;
};

const CodeContent: React.FC<{ file: CodeBlockFile }> = ({ file }) => (
  <div className="ginga-code-block-content">
    {file.content ?? (
      <pre>
        <code>{file.code}</code>
      </pre>
    )}
  </div>
);

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code = "",
  filename,
  files,
  filesLabel = "Files",
  copyLabel = "Copy",
  copiedLabel = "Copied!",
  copyIcon,
  copiedIcon,
  className,
  children,
  ...props
}) => {
  const entries: CodeBlockFile[] = files ?? [
    { filename: filename ?? "", code, content: children },
  ];
  const [selectedKey, setSelectedKey] = useState<Key>(0);
  const [copied, setCopied] = useState(false);
  const activeFile = entries[Number(selectedKey)] ?? entries[0];
  const hasTabs = entries.length > 1;

  const handleCopy = async () => {
    if (!navigator?.clipboard?.writeText || !activeFile) return;
    await navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyButton = (
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

  if (!hasTabs) {
    return (
      <div className={cn("ginga-code-block", className)} {...props}>
        <div className="ginga-code-block-header">
          {activeFile?.filename && (
            <span className="ginga-code-block-filename">
              {activeFile.filename}
            </span>
          )}
          {copyButton}
        </div>
        {activeFile && <CodeContent file={activeFile} />}
      </div>
    );
  }

  return (
    <div className={cn("ginga-code-block", className)} {...props}>
      <AriaTabs
        selectedKey={selectedKey}
        onSelectionChange={(key) => {
          setSelectedKey(key);
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
                {file.filename}
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
            <CodeContent file={file} />
          </AriaTabPanel>
        ))}
      </AriaTabs>
    </div>
  );
};
