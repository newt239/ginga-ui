"use client";

import { Box } from "@ginga-ui/core";
import styles from "../box.module.css";

export function BasicExample() {
  return (
    <Box className={styles.basicBox}>
      基本的なBoxコンポーネントです。コンテンツをラップするコンテナとして使用します。
    </Box>
  );
}

export function LayoutExample() {
  return (
    <Box className={styles.layout}>
      <Box className={styles.layoutItem}>ボックス1</Box>
      <Box className={styles.layoutItem}>ボックス2</Box>
      <Box className={styles.layoutItem}>ボックス3</Box>
    </Box>
  );
}

export function CardStyleExample() {
  return (
    <Box className={styles.cardStyleBox}>
      <h3 className={styles.cardStyleTitle}>カードスタイルのBox</h3>
      <p className={styles.cardStyleText}>
        Boxコンポーネントにスタイルを適用することで、カードのような見た目を実現できます。
      </p>
    </Box>
  );
}
