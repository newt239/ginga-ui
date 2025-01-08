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
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ginga-ui",
      fileName: (format) => `ginga-ui.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: [
        {
          format: "es",
          dir: "dist",
          entryFileNames: "ginga-ui.es.js",
          banner: '"use client"',
        },
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].es.js",
          banner: '"use client"',
        },
        {
          format: "cjs",
          dir: "dist",
          entryFileNames: "ginga-ui.cjs.js",
          banner: '"use client"',
        },
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].cjs.js",
          banner: '"use client"',
        },
      ],
    },
  },
});
