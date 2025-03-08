import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["./src/index.ts"],
  dts: true,
  target: "esnext",
  format: ["cjs", "esm"],
  sourcemap: true,
  esbuildPlugins: [],
  onSuccess: "cp src/index.css dist/ && cp src/variables.css dist/",
});
