import cssPlugin from "esbuild-plugin-react18-css";
import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["./src/index.ts"],
  dts: true,
  target: "esnext",
  format: ["cjs", "esm"],
  sourcemap: true,
  esbuildPlugins: [cssPlugin()],
  onSuccess: "cp src/index.css dist/ && cp src/variables.css dist/",
});
