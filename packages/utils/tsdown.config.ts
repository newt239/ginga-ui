import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  entry: ["./src/index.ts"],
  dts: true,
  target: "esnext",
  format: ["cjs", "esm"],
  fixedExtension: false,
  platform: "neutral",
  sourcemap: true,
});
