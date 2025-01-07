import type { Preview } from "@storybook/react";
import "../public/variables.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        // 👇 Default values
        { name: "Dark", value: "#000" },
        { name: "Light", value: "#fff" },
        { name: "Themed", value: "var(--color-background)" },
      ],
      default: "Themed",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
