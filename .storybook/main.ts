import path from "path";

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");

    return mergeConfig(
      {
        ...config,
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "../src"),
          },
        },
      },
      {
        optimizeDeps: {
          include: ["storybook-dark-mode"],
        },
      }
    );
  },
};
export default config;
