/// <reference types="vitest">
import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: "dist/types",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: {
        main: path.resolve(__dirname, "src/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: "[format]/[name]",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: {
        components: "src/components/index.ts",
        ai: "src/lib/ai/themeClient.ts",
      },
      output: {
        preserveModules: true,
        exports: "named",
        banner: (chunk) => {
          if (chunk.facadeModuleId?.includes("components")) {
            return `"use client";`;
          }
          return undefined;
        },
        assetFileNames: "ginga-ui[extname]",
      },
    },
  },
});
