"use client";

import { Button } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Button variant="filled" onPress={() => alert("クリックされました!")}>
      クリック
    </Button>
  );
}

export function VariantsExample() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="filled">Filled</Button>
      <Button variant="light">Light</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="reverse">Reverse</Button>
    </div>
  );
}

export function DisabledExample() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="filled" disabled>
        Disabled Filled
      </Button>
      <Button variant="light" disabled>
        Disabled Light
      </Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  );
}

export function FormExample() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        alert(`送信: ${formData.get("name")}`);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "300px",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="名前を入力"
        style={{
          padding: "0.5rem",
          borderRadius: "var(--size-radius)",
          border: "var(--width-border) solid var(--color-primary-2)",
        }}
      />
      <Button type="submit" variant="filled">
        送信
      </Button>
    </form>
  );
}
