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
        backgroundColor: "var(--color-primary-1)",
        border: "1px solid var(--color-primary-3)",
        borderRadius: "var(--size-radius)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>カードスタイルのBox</h3>
      <p>
        Boxコンポーネントにスタイルを適用することで、カードのような見た目を実現できます。
      </p>
    </Box>
  );
}

export function NestedExample() {
  return (
    <Box
      style={{
        padding: "1rem",
        backgroundColor: "var(--color-primary-1)",
        borderRadius: "var(--size-radius)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>外側のBox</h3>
      <Box
        style={{
          padding: "1rem",
          backgroundColor: "var(--color-background)",
          border: "1px solid var(--color-primary-3)",
          borderRadius: "var(--size-radius)",
          marginTop: "1rem",
        }}
      >
        <p style={{ margin: 0 }}>
          ネストされた内側のBox。Boxコンポーネントは入れ子にして使用できます。
        </p>
      </Box>
    </Box>
  );
}
