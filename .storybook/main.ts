import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../packages/core/src/components/**/src/*.stories.tsx"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@ginga-ui/core": resolve(__dirname, "../packages/core/src"),
          "@ginga-ui/utils": resolve(__dirname, "../packages/utils/src"),
        },
      },
    });
  },
};

export default config;
