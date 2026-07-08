import { CodeBlock } from "./code-block";

import type { Meta, StoryObj } from "@storybook/react";

const sampleCode = `import { Button } from "@ginga-ui/core";

export const App = () => <Button>Click me</Button>;`;

const meta: Meta<typeof CodeBlock> = {
  title: "Display/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  args: { code: sampleCode },
};

export const WithFilename: Story = {
  args: { code: sampleCode, filename: "app.tsx" },
};

export const WithHighlightedChildren: Story = {
  args: {
    code: sampleCode,
    filename: "app.tsx",
    children: (
      <pre>
        <code>
          <span style={{ color: "#c678dd" }}>import</span>
          <span> {"{ Button }"} </span>
          <span style={{ color: "#c678dd" }}>from</span>
          <span style={{ color: "#98c379" }}> "@ginga-ui/core"</span>
          <span>;</span>
          {"\n\n"}
          <span style={{ color: "#c678dd" }}>export const</span>
          <span style={{ color: "#61afef" }}> App</span>
          <span> = () =&gt; </span>
          <span style={{ color: "#e06c75" }}>{"<Button>"}</span>
          <span>Click me</span>
          <span style={{ color: "#e06c75" }}>{"</Button>"}</span>
          <span>;</span>
        </code>
      </pre>
    ),
  },
};

export const CustomLabels: Story = {
  args: { code: sampleCode, copyLabel: "コピー", copiedLabel: "コピー完了!" },
};
