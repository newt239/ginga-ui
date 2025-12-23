"use client";

import { useState } from "react";
import { Button } from "@ginga-ui/core";
import DOMPurify from "dompurify";

type CodeBlockProps = {
  code: string;
  highlightedCode: string;
  filename?: string;
};

export function CodeBlock({ code, highlightedCode, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (!navigator?.clipboard?.writeText) {
        throw new Error("Clipboard API is not available");
      }
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code to clipboard:", error);
      window.alert(
        "クリップボードへのコピーに失敗しました。ブラウザの設定やHTTPS環境をご確認ください。"
      );
    }
  };

  // ShikiによるHTMLをDOMPurifyでサニタイズ
  const sanitizedHtml = DOMPurify.sanitize(highlightedCode);

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
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </div>
  );
}
