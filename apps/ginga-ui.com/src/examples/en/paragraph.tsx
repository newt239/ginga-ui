"use client";

import { Paragraph } from "@ginga-ui/core";
import styles from "../paragraph.module.css";

export function BasicExample() {
  return (
    <Paragraph className={styles.basicParagraph}>
      This is a basic paragraph component. Use it to display text content.
    </Paragraph>
  );
}

export function MultipleExample() {
  return (
    <div className={styles.multipleParagraphs}>
      <Paragraph>
        This is the first paragraph. The Paragraph component displays readable
        text with appropriate line height and margins.
      </Paragraph>
      <Paragraph>
        This is the second paragraph. Use multiple paragraphs to organize
        information.
      </Paragraph>
      <Paragraph>
        This is the third paragraph. Each paragraph is visually separated,
        creating an easy-to-read structure.
      </Paragraph>
    </div>
  );
}

export function LongTextExample() {
  return (
    <Paragraph className={styles.longParagraph}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
  );
}

export function CustomStyleExample() {
  return (
    <div className={styles.customStack}>
      <Paragraph className={styles.largeParagraph}>
        A paragraph with a larger font size.
      </Paragraph>
      <Paragraph className={styles.accentParagraph}>
        Text in the primary color.
      </Paragraph>
      <Paragraph className={styles.centeredParagraph}>
        A centered paragraph.
      </Paragraph>
      <Paragraph className={styles.highlightedParagraph}>
        A paragraph with a background color. Use it to highlight important
        information.
      </Paragraph>
    </div>
  );
}
