import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";
import "./preview.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Color scheme",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "system", title: "System" },
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "system",
  },
  decorators: [
    (Story, context) => {
      const root = document.documentElement;
      if (context.globals.theme === "system") {
        delete root.dataset.theme;
      } else {
        root.dataset.theme = context.globals.theme;
      }
      return Story();
    },
  ],
};

export default preview;
