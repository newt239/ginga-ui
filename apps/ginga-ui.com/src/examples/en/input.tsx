"use client";

import { Input } from "@ginga-ui/core";

import styles from "../input.module.css";

export function BasicExample() {
  return (
    <Input
      className={styles.basicInput}
      aria-label="Text"
      placeholder="Enter text..."
    />
  );
}

export function TypesExample() {
  return (
    <div className={styles.typeList}>
      <Input type="text" aria-label="Text" placeholder="Text" />
      <Input
        type="email"
        aria-label="Email address"
        placeholder="Email address"
      />
      <Input type="password" aria-label="Password" placeholder="Password" />
      <Input type="number" aria-label="Number" placeholder="Number" />
    </div>
  );
}

export function DisabledExample() {
  return (
    <Input
      className={styles.disabledInput}
      disabled
      aria-label="Disabled input field"
      placeholder="Disabled input field"
    />
  );
}

export function WithValueExample() {
  return (
    <Input
      className={styles.valueInput}
      aria-label="Default value example"
      defaultValue="This field has a default value"
    />
  );
}
