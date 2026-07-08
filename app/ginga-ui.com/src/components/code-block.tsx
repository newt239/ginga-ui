import { CodeBlock as CoreCodeBlock } from "@ginga-ui/core";

type CodeBlockProps = {
  code: string;
  highlightedCode?: string;
  filename?: string;
};

export function CodeBlock({ code, highlightedCode, filename }: CodeBlockProps) {
  return (
    <CoreCodeBlock
      code={code}
      filename={filename}
      copyLabel="コピー"
      copiedLabel="コピー完了!"
    >
      {highlightedCode ? (
        <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      ) : null}
    </CoreCodeBlock>
  );
}
