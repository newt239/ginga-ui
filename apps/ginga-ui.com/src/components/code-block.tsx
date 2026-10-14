import { CodeBlock as CoreCodeBlock } from "@ginga-ui/core";

type HighlightedFile = {
  filename: string;
  code: string;
  highlightedCode?: string;
};

type CodeBlockProps =
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
    };

const renderHighlighted = (html?: string) =>
  html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : undefined;

export function CodeBlock(props: CodeBlockProps) {
  const labels = {
    copyLabel: "コピーする",
    copiedLabel: "コピー済み",
    filesLabel: "ファイル",
  };

  if (props.files) {
    return (
      <CoreCodeBlock
        {...labels}
        files={props.files.map((file) => ({
          filename: file.filename,
          code: file.code,
          content: renderHighlighted(file.highlightedCode),
        }))}
      />
    );
  }

  return (
    <CoreCodeBlock {...labels} code={props.code} filename={props.filename}>
      {renderHighlighted(props.highlightedCode)}
    </CoreCodeBlock>
  );
}
