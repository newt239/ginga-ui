"use client";

import { Heading } from "@ginga-ui/core";
import styles from "../heading.module.css";

export function BasicExample() {
  return (
    <div className={styles.basicStack}>
      <Heading level={1}>見出し1</Heading>
      <Heading level={2}>見出し2</Heading>
      <Heading level={3}>見出し3</Heading>
    </div>
  );
}

export function AllLevelsExample() {
  return (
    <div className={styles.allLevelsStack}>
      <Heading level={1}>見出しレベル 1</Heading>
      <Heading level={2}>見出しレベル 2</Heading>
      <Heading level={3}>見出しレベル 3</Heading>
      <Heading level={4}>見出しレベル 4</Heading>
      <Heading level={5}>見出しレベル 5</Heading>
      <Heading level={6}>見出しレベル 6</Heading>
    </div>
  );
}

export function PageStructureExample() {
  return (
    <article className={styles.article}>
      <Heading level={1}>記事タイトル</Heading>
      <p>この記事の導入部分です。</p>

      <Heading level={2}>第1章</Heading>
      <p>第1章の内容です。</p>

      <Heading level={3}>1.1 サブセクション</Heading>
      <p>サブセクションの内容です。</p>

      <Heading level={2}>第2章</Heading>
      <p>第2章の内容です。</p>
    </article>
  );
}

export function CustomStyleExample() {
  return (
    <div className={styles.customStack}>
      <Heading level={2} className={styles.accentHeading}>
        プライマリカラーの見出し
      </Heading>
      <Heading level={3} className={styles.centeredHeading}>
        中央揃えの見出し
      </Heading>
      <Heading level={2} className={styles.underlinedHeading}>
        下線付き見出し
      </Heading>
    </div>
  );
}
