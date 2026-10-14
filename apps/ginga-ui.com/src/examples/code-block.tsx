"use client";

import { CodeBlock } from "@ginga-ui/core";
import { Check, Copy } from "lucide-react";

export function BasicExample() {
  return (
    <CodeBlock
      code={`pnpm add @ginga-ui/core`}
      copyLabel="コピーする"
      copiedLabel="コピー済み"
    />
  );
}

export function FilenameExample() {
  return (
    <CodeBlock
      filename="app.tsx"
      code={`import { Button } from "@ginga-ui/core";

export const App = () => <Button>クリック</Button>;`}
      copyLabel="コピーする"
      copiedLabel="コピー済み"
    />
  );
}

export function FilesExample() {
  return (
    <CodeBlock
      files={[
        {
          filename: "app.tsx",
          code: `import "./app.css";

export const App = () => <p className="message">こんにちは</p>;`,
        },
        {
          filename: "app.css",
          code: `.message {
  color: var(--color-primary);
}`,
        },
      ]}
      filesLabel="ファイル"
      copyLabel="コピーする"
      copiedLabel="コピー済み"
    />
  );
}

export function WithIconExample() {
  return (
    <CodeBlock
      code={`pnpm add lucide-react`}
      copyLabel="コピーする"
      copiedLabel="コピー済み"
      copyIcon={<Copy />}
      copiedIcon={<Check />}
    />
  );
}
