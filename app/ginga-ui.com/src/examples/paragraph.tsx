import { Paragraph } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Paragraph>
      これは基本的な段落コンポーネントです。テキストコンテンツを表示するために使用します。
    </Paragraph>
  );
}

export function MultipleExample() {
  return (
    <div>
      <Paragraph>
        最初の段落です。Paragraphコンポーネントは、適切な行間とマージンで読みやすいテキストを表示します。
      </Paragraph>
      <Paragraph>
        2つ目の段落です。複数の段落を使用して、情報を整理して表示できます。
      </Paragraph>
      <Paragraph>
        3つ目の段落です。各段落は視覚的に分離され、読みやすい構造を作ります。
      </Paragraph>
    </div>
  );
}

export function LongTextExample() {
  return (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
  );
}

export function CustomStyleExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Paragraph style={{ fontSize: "1.125rem" }}>
        大きめのフォントサイズの段落です。
      </Paragraph>
      <Paragraph style={{ color: "var(--color-primary)" }}>
        プライマリカラーのテキストです。
      </Paragraph>
      <Paragraph style={{ textAlign: "center" }}>
        中央揃えの段落です。
      </Paragraph>
      <Paragraph
        style={{
          padding: "1rem",
          backgroundColor: "var(--color-primary-1)",
          borderLeft: "4px solid var(--color-primary)",
        }}
      >
        背景色とボーダーを持つ段落です。重要な情報を強調表示できます。
      </Paragraph>
    </div>
  );
}
