"use client";

import { Button, FormControl, Input } from "@ginga-ui/core";
import { Send } from "lucide-react";

import styles from "./form-control.module.css";

export function BasicExample() {
  return (
    <FormControl className={styles.basicField} title="ユーザー名">
      <Input placeholder="ユーザー名を入力" />
    </FormControl>
  );
}

export function WithIdExample() {
  return (
    <FormControl
      className={styles.idField}
      title="メールアドレス"
      htmlFor="email-input"
    >
      <Input id="email-input" type="email" placeholder="example@email.com" />
    </FormControl>
  );
}

export function MultipleFieldsExample() {
  return (
    <div className={styles.fieldList}>
      <FormControl title="名前">
        <Input placeholder="山田 太郎" />
      </FormControl>
      <FormControl title="メールアドレス">
        <Input type="email" placeholder="example@email.com" />
      </FormControl>
      <FormControl title="パスワード">
        <Input type="password" placeholder="8文字以上" />
      </FormControl>
    </div>
  );
}

export function FormExample() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        alert("フォーム送信!");
      }}
    >
      <FormControl title="お名前" htmlFor="name">
        <Input id="name" required />
      </FormControl>
      <FormControl title="メールアドレス" htmlFor="email">
        <Input id="email" type="email" required />
      </FormControl>
      <Button type="submit" variant="filled" startIcon={<Send />}>
        送信
      </Button>
    </form>
  );
}
