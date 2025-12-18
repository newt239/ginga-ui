import { Anchor } from "@ginga-ui/core";

export function BasicExample() {
  return <Anchor href="https://example.com">リンクをクリック</Anchor>;
}

export function ExternalExample() {
  return (
    <Anchor href="https://github.com/newt239/ginga-ui" target="_blank">
      GitHubで開く(新しいタブ)
    </Anchor>
  );
}

export function DisabledExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Anchor href="https://example.com">通常のリンク</Anchor>
      <Anchor href="https://example.com" disabled>
        無効化されたリンク
      </Anchor>
    </div>
  );
}

export function ButtonVariantExample() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Anchor href="https://example.com">デフォルトリンク</Anchor>
      <Anchor href="https://example.com" variant="button">
        ボタンスタイルのリンク
      </Anchor>
    </div>
  );
}
