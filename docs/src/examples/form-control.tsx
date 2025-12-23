import { FormControl, Input } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <FormControl title="ユーザー名">
      <Input placeholder="ユーザー名を入力" />
    </FormControl>
  );
}

export function WithIdExample() {
  return (
    <FormControl title="メールアドレス" htmlFor="email-input">
      <Input id="email-input" type="email" placeholder="example@email.com" />
    </FormControl>
  );
}

export function MultipleFieldsExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
      onSubmit={(e) => {
        e.preventDefault();
        alert("フォーム送信!");
      }}
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      <FormControl title="お名前" htmlFor="name">
        <Input id="name" required />
      </FormControl>
      <FormControl title="メールアドレス" htmlFor="email">
        <Input id="email" type="email" required />
      </FormControl>
      <button
        type="submit"
        style={{
          padding: "0.75rem",
          backgroundColor: "var(--color-primary)",
          color: "var(--color-background)",
          border: "none",
          borderRadius: "var(--size-radius)",
          cursor: "pointer",
        }}
      >
        送信
      </button>
    </form>
  );
}
