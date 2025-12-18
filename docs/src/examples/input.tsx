import { Input } from "@ginga-ui/core";

export function BasicExample() {
  return <Input placeholder="テキストを入力..." />;
}

export function TypesExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Input type="text" placeholder="テキスト" />
      <Input type="email" placeholder="メールアドレス" />
      <Input type="password" placeholder="パスワード" />
      <Input type="number" placeholder="数値" />
    </div>
  );
}

export function DisabledExample() {
  return <Input disabled placeholder="無効化された入力フィールド" />;
}

export function WithValueExample() {
  return <Input defaultValue="初期値が設定されています" />;
}
