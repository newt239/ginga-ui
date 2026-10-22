"use client";

import { Box } from "@ginga-ui/core";
import styles from "../box.module.css";

export function BasicExample() {
  return (
    <Box className={styles.basicBox}>
      A basic Box component. Use it as a container that wraps content.
    </Box>
  );
}

export function LayoutExample() {
  return (
    <Box className={styles.layout}>
      <Box className={styles.layoutItem}>Box 1</Box>
      <Box className={styles.layoutItem}>Box 2</Box>
      <Box className={styles.layoutItem}>Box 3</Box>
    </Box>
  );
}

export function CardStyleExample() {
  return (
    <Box className={styles.cardStyleBox}>
      <h3 className={styles.cardStyleTitle}>Card-style Box</h3>
      <p className={styles.cardStyleText}>
        Apply styles to the Box component to give it a card-like appearance.
      </p>
    </Box>
  );
}
