"use client";

import { Box } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Box style={{ padding: "1rem", backgroundColor: "var(--color-primary-1)" }}>
      基本的なBoxコンポーネントです。コンテンツをラップするコンテナとして使用します。
    </Box>
  );
}

export function LayoutExample() {
  return (
    <Box
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <Box
        style={{
          flex: "1 1 200px",
          padding: "1rem",
          backgroundColor: "var(--color-primary-1)",
          borderRadius: "var(--size-radius)",
        }}
      >
        ボックス1
      </Box>
      <Box
        style={{
          flex: "1 1 200px",
          padding: "1rem",
          backgroundColor: "var(--color-primary-2)",
          borderRadius: "var(--size-radius)",
        }}
      >
        ボックス2
      </Box>
      <Box
        style={{
          flex: "1 1 200px",
          padding: "1rem",
          backgroundColor: "var(--color-primary-3)",
          borderRadius: "var(--size-radius)",
        }}
      >
        ボックス3
      </Box>
    </Box>
  );
}

export function CardStyleExample() {
  return (
    <Box
      style={{
        padding: "1.5rem",
        backgroundColor: "var(--color-surface)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>カードスタイルのBox</h3>
      <p>
        Boxコンポーネントにスタイルを適用することで、カードのような見た目を実現できます。
      </p>
    </Box>
  );
}
