import path from "path";

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
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
        // Add dependencies to pre-optimization
        optimizeDeps: {
          include: ["storybook-dark-mode"],
        },
      }
    );
  },
};
export default config;
