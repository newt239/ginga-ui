"use client";

import { Heading } from "@ginga-ui/core";
import styles from "../heading.module.css";

export function BasicExample() {
  return (
    <div className={styles.basicStack}>
      <Heading level="h1">Heading 1</Heading>
      <Heading level="h2">Heading 2</Heading>
      <Heading level="h3">Heading 3</Heading>
    </div>
  );
}

export function AllLevelsExample() {
  return (
    <div className={styles.allLevelsStack}>
      <Heading level="h1">Heading level 1</Heading>
      <Heading level="h2">Heading level 2</Heading>
      <Heading level="h3">Heading level 3</Heading>
      <Heading level="h4">Heading level 4</Heading>
      <Heading level="h5">Heading level 5</Heading>
      <Heading level="h6">Heading level 6</Heading>
    </div>
  );
}

export function PageStructureExample() {
  return (
    <article className={styles.article}>
      <Heading level="h1">Article title</Heading>
      <p>This is the introduction of the article.</p>

      <Heading level="h2">Chapter 1</Heading>
      <p>Content of chapter 1.</p>

      <Heading level="h3">1.1 Subsection</Heading>
      <p>Content of the subsection.</p>

      <Heading level="h2">Chapter 2</Heading>
      <p>Content of chapter 2.</p>
    </article>
  );
}

export function CustomStyleExample() {
  return (
    <div className={styles.customStack}>
      <Heading level="h2" className={styles.accentHeading}>
        Heading in the primary color
      </Heading>
      <Heading level="h3" className={styles.centeredHeading}>
        Centered heading
      </Heading>
      <Heading level="h2" className={styles.underlinedHeading}>
        Underlined heading
      </Heading>
    </div>
  );
}
