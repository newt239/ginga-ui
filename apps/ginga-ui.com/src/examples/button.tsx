"use client";

import { Button, Input } from "@ginga-ui/core";
import styles from "./button.module.css";

export function BasicExample() {
  return (
    <Button variant="filled" onPress={() => alert("クリックされました!")}>
      クリック
    </Button>
  );
}

export function VariantsExample() {
  return (
    <div className={styles.variantRow}>
      <Button variant="filled">Filled</Button>
      <Button variant="light">Light</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="reverse">Reverse</Button>
    </div>
  );
}

export function SizesExample() {
  return (
    <div className={styles.sizeRow}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

export function DisabledExample() {
  return (
    <div className={styles.disabledRow}>
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
      className={styles.form}
    >
      <Input
        type="text"
        name="name"
        placeholder="名前を入力"
        aria-label="名前"
      />
      <Button type="submit" variant="filled">
        送信
      </Button>
    </form>
  );
}
