import { defineConfig, type Rolldown } from "tsdown";

const USE_CLIENT_DIRECTIVE = /^(["'])use client\1;?/;

const preserveUseClient = (): Rolldown.Plugin => {
  const clientModuleIds = new Set<string>();
  return {
    name: "preserve-use-client",
    transform: {
      filter: { code: USE_CLIENT_DIRECTIVE },
      handler(code, id) {
        clientModuleIds.add(id);
        return {
          code: code.replace(USE_CLIENT_DIRECTIVE, (directive) =>
            " ".repeat(directive.length)
          ),
          map: null,
        };
      },
    },
    banner(chunk) {
      return chunk.facadeModuleId && clientModuleIds.has(chunk.facadeModuleId)
        ? '"use client";'
        : "";
    },
  };
};

export default defineConfig({
  clean: true,
  entry: ["./src/index.ts"],
  dts: true,
  target: "esnext",
  format: ["esm"],
  fixedExtension: false,
  platform: "neutral",
  sourcemap: true,
  unbundle: true,
  css: {
    inject: true,
  },
  plugins: [preserveUseClient()],
  onSuccess: "cp src/variables.css dist/",
});
