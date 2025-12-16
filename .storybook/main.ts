import type { StorybookConfig } from "@storybook/react-vite";
import { readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";

const componentsDir = resolve(__dirname, "../packages/components");
const componentAliases = Object.fromEntries(
  readdirSync(componentsDir)
    .filter((dir) => {
      const dirPath = resolve(componentsDir, dir);
      return statSync(dirPath).isDirectory();
    })
    .map((dir) => [`@ginga-ui/${dir}`, resolve(componentsDir, dir, "src")])
);

const config: StorybookConfig = {
  stories: ["../packages/components/**/src/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@ginga-ui/core": resolve(__dirname, "../packages/core/src"),
        "@ginga-ui/utils": resolve(__dirname, "../packages/utils/src"),
        ...componentAliases,
      };
    }
    return config;
  },
};

export default config;
