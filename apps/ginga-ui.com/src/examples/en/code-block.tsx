"use client";

import { CodeBlock } from "@ginga-ui/core";
import { Check, Copy } from "lucide-react";

export function BasicExample() {
  return (
    <CodeBlock
      code={`pnpm add @ginga-ui/core`}
      copyLabel="Copy"
      copiedLabel="Copied"
    />
  );
}

export function FilenameExample() {
  return (
    <CodeBlock
      filename="app.tsx"
      code={`import { Button } from "@ginga-ui/core";

export const App = () => <Button>Click</Button>;`}
      copyLabel="Copy"
      copiedLabel="Copied"
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

export const App = () => <p className="message">Hello</p>;`,
        },
        {
          filename: "app.css",
          code: `.message {
  color: var(--color-primary);
}`,
        },
      ]}
      filesLabel="Files"
      copyLabel="Copy"
      copiedLabel="Copied"
    />
  );
}

export function WithIconExample() {
  return (
    <CodeBlock
      code={`pnpm add lucide-react`}
      copyLabel="Copy"
      copiedLabel="Copied"
      copyIcon={<Copy />}
      copiedIcon={<Check />}
    />
  );
}
