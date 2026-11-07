"use client";

import { Anchor } from "@ginga-ui/core";
import NextLink from "next/link";
import styles from "../anchor.module.css";

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
    <div className={styles.linkStack}>
      <Anchor href="https://example.com">通常のリンク</Anchor>
      <Anchor href="https://example.com" disabled>
        無効化されたリンク
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

export function RouterLinkExample() {
  return (
    <Anchor href="/ja/components" render={(props) => <NextLink {...props} />}>
      コンポーネント一覧へ
    </Anchor>
  );
}
