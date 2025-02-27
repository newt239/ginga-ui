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
      outDir: "dist",
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
      fileName: (format) => `ginga-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: {
        "components/index": "src/components/index.ts",
        "ai/index": "src/ai/index.ts",
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
        banner: (chunk) => {
          if (chunk.facadeModuleId?.includes("components")) {
            return `"use client";`;
          }
          return undefined;
        },
        entryFileNames: "[name].[format].js",
        assetFileNames: "style[extname]",
      },
    },
  },
});
