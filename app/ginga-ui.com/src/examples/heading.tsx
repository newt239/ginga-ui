import { Heading } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading level="h1">見出し1 - 最も大きな見出し</Heading>
      <Heading level="h2">見出し2 - セクションの見出し</Heading>
      <Heading level="h3">見出し3 - サブセクションの見出し</Heading>
    </div>
  );
}

export function AllLevelsExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading level="h1">見出しレベル 1</Heading>
      <Heading level="h2">見出しレベル 2</Heading>
      <Heading level="h3">見出しレベル 3</Heading>
      <Heading level="h4">見出しレベル 4</Heading>
      <Heading level="h5">見出しレベル 5</Heading>
      <Heading level="h6">見出しレベル 6</Heading>
    </div>
  );
}

export function PageStructureExample() {
  return (
    <article>
      <Heading level="h1">記事タイトル</Heading>
      <p>この記事の導入部分です。</p>

      <Heading level="h2">第1章</Heading>
      <p>第1章の内容です。</p>

      <Heading level="h3">1.1 サブセクション</Heading>
      <p>サブセクションの内容です。</p>

      <Heading level="h2">第2章</Heading>
      <p>第2章の内容です。</p>
    </article>
  );
}

export function CustomStyleExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading level="h2" style={{ color: "var(--color-primary)" }}>
        プライマリカラーの見出し
      </Heading>
      <Heading level="h3" style={{ textAlign: "center" }}>
        中央揃えの見出し
      </Heading>
      <Heading
        level="h2"
        style={{
          borderBottom: "2px solid var(--color-primary)",
          paddingBottom: "0.5rem",
        }}
      >
        下線付き見出し
      </Heading>
    </div>
  );
}
