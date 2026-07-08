"use client";

import { useState } from "react";

import { cn } from "@ginga-ui/utils";

import { Button } from "../button";
import "./index.css";

export type CodeBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  code: string;
  filename?: string;
  copyLabel?: string;
  copiedLabel?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  filename,
  copyLabel = "Copy",
  copiedLabel = "Copied!",
  className,
  children,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!navigator?.clipboard?.writeText) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("ginga-code-block", className)} {...props}>
      <div className="ginga-code-block-header">
        {filename && (
          <span className="ginga-code-block-filename">{filename}</span>
        )}
        <Button
          variant="light"
          className="ginga-code-block-copy-button"
          onPress={handleCopy}
        >
          <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
        </Button>
      </div>
      <div className="ginga-code-block-content">
        {children ?? (
          <pre>
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
};
