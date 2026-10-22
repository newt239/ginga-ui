"use client";

import { Anchor } from "@ginga-ui/core";
import styles from "../anchor.module.css";

export function BasicExample() {
  return <Anchor href="https://example.com">Click the link</Anchor>;
}

export function ExternalExample() {
  return (
    <Anchor href="https://github.com/newt239/ginga-ui" target="_blank">
      Open on GitHub (new tab)
    </Anchor>
  );
}

export function DisabledExample() {
  return (
    <div className={styles.linkStack}>
      <Anchor href="https://example.com">Regular link</Anchor>
      <Anchor href="https://example.com" disabled>
        Disabled link
      </Anchor>
    </div>
  );
}

export function ButtonVariantExample() {
  return (
    <div className={styles.buttonRow}>
      <Anchor href="https://example.com" variant="button">
        Filled
      </Anchor>
      <Anchor href="https://example.com" variant="button" buttonVariant="light">
        Light
      </Anchor>
      <Anchor
        href="https://example.com"
        variant="button"
        buttonVariant="outline"
      >
        Outline
      </Anchor>
      <Anchor href="https://example.com" variant="button" buttonVariant="ghost">
        Ghost
      </Anchor>
    </div>
  );
}
