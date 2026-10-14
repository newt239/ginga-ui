import { CodeBlock } from "#/components/code-block";
import { highlightCode } from "#/lib/shiki";

type SourceFile = {
  filename: string;
  code: string;
  lang: string;
};

type HighlightedCodeBlockProps =
  | { code: string; lang: string; filename?: string; files?: undefined }
  | {
      files: SourceFile[];
      code?: undefined;
      lang?: undefined;
      filename?: undefined;
    };

export async function HighlightedCodeBlock(props: HighlightedCodeBlockProps) {
  if (props.files) {
    const files = await Promise.all(
      props.files.map(async (file) => ({
        filename: file.filename,
        code: file.code,
        highlightedCode: await highlightCode(file.code, file.lang),
      }))
    );
    return <CodeBlock files={files} />;
  }

  return (
    <CodeBlock
      code={props.code}
      filename={props.filename}
      highlightedCode={await highlightCode(props.code, props.lang)}
    />
  );
}
