import cssModulesPlugin from "esbuild-css-modules-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "es2019",
  format: ["cjs", "esm"],
  banner: {
    js: '"use client"',
  },
  sourcemap: true,
  dts: true,
  esbuildPlugins: [cssModulesPlugin()],
});
