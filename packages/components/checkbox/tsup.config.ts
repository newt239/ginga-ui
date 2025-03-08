import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["./src/index.ts"],
  dts: true,
  target: "esnext",
  format: ["cjs", "esm"],
  banner: {
    js: '"use client";',
  },
  sourcemap: true,
  onSuccess: "cp src/index.css dist/",
});
