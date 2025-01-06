/// <reference types="vitest">
import fs from "fs";
import path, { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { name } from "./package.json";

const formattedName = /[^/]+$/.exec(name)?.[0] ?? name;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    {
      name: "copy-css",
      generateBundle() {
        this.emitFile({
          type: "asset",
          fileName: "variables.css",
          source: fs.readFileSync("./src/styles/variables.css", "utf-8"),
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: formattedName,
      formats: ["es"],
      fileName: (format) => `${formattedName}.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        inlineDynamicImports: false,
      },
    },
  },
});
