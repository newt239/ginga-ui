"use client";

import { Input } from "@ginga-ui/core";

import styles from "../input.module.css";

export function BasicExample() {
  return (
    <Input
      className={styles.basicInput}
      aria-label="テキスト"
      placeholder="テキストを入力..."
    />
  );
}

export function TypesExample() {
  return (
    <div className={styles.typeList}>
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
      className={styles.disabledInput}
      disabled
      aria-label="無効化された入力フィールド"
      placeholder="無効化された入力フィールド"
    />
  );
}

export function WithValueExample() {
  return (
    <Input
      className={styles.valueInput}
      aria-label="初期値の例"
      defaultValue="初期値が設定されています"
    />
  );
}
