"use client";

import { CodeBlock as CoreCodeBlock } from "@ginga-ui/core";
import { Check, Copy } from "lucide-react";
import { useDictionary } from "#/i18n/locale-context";
import styles from "./code-block.module.css";

type HighlightedFile = {
  filename: string;
  code: string;
  highlightedCode?: string;
};

type CodeBlockVariant = "default" | "attached";

type CodeBlockProps = { variant?: CodeBlockVariant } & (
  | {
      code: string;
      highlightedCode?: string;
      filename?: string;
      files?: undefined;
    }
  | {
      files: HighlightedFile[];
      code?: undefined;
      highlightedCode?: undefined;
      filename?: undefined;
    }
);

const renderHighlighted = (html?: string) =>
  html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : undefined;

export function CodeBlock(props: CodeBlockProps) {
  const { codeBlock } = useDictionary();
  const attached = props.variant === "attached";
  const sharedProps = {
    className: attached ? styles.attached : undefined,
    "data-attached": attached || undefined,
    copyLabel: codeBlock.copy,
    copiedLabel: codeBlock.copied,
    filesLabel: codeBlock.files,
    copyIcon: <Copy />,
    copiedIcon: <Check />,
  };

  if (props.files) {
    return (
      <CoreCodeBlock
        {...sharedProps}
        files={props.files.map((file) => ({
          filename: file.filename,
          code: file.code,
          content: renderHighlighted(file.highlightedCode),
        }))}
      />
    );
  }

  return (
    <CoreCodeBlock {...sharedProps} code={props.code} filename={props.filename}>
      {renderHighlighted(props.highlightedCode)}
    </CoreCodeBlock>
  );
}
