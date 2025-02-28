import cssPlugin from "esbuild-plugin-react18-css";
import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["./src/index.ts"],
  dts: true,
  loader: {
    ".css": "copy",
  },
  target: "esnext",
  format: ["cjs", "esm"],
  banner: {
    js: '"use client"',
  },
  sourcemap: true,
  esbuildPlugins: [cssPlugin()],
  onSuccess: "cp src/index.css dist/",
});
