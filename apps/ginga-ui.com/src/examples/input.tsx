"use client";

import { Input } from "@ginga-ui/core";

export function BasicExample() {
  return <Input aria-label="テキスト" placeholder="テキストを入力..." />;
}

export function TypesExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Input type="text" aria-label="テキスト" placeholder="テキスト" />
      <Input
        type="email"
        aria-label="メールアドレス"
        placeholder="メールアドレス"
      />
      <Input type="password" aria-label="パスワード" placeholder="パスワード" />
      <Input type="number" aria-label="数値" placeholder="数値" />
    </div>
  );
}

export function DisabledExample() {
  return (
    <Input
      disabled
      aria-label="無効化された入力フィールド"
      placeholder="無効化された入力フィールド"
    />
  );
}

export function WithValueExample() {
  return (
    <Input aria-label="初期値の例" defaultValue="初期値が設定されています" />
  );
}
