"use client";

import { useState } from "react";
import { Button } from "@ginga-ui/core";

type CodeBlockProps = {
  code: string;
  highlightedCode: string;
  filename?: string;
};

export function CodeBlock({ code, highlightedCode, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <div className="code-header">
        {filename && <span className="code-filename">{filename}</span>}
        <Button variant="light" onPress={handleCopy} className="copy-button">
          {copied ? "コピー完了!" : "コピー"}
        </Button>
      </div>
      <div
        className="code-content"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}
