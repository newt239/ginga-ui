import Heading from "./Heading";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  title: "Display/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const FirstStory: Story = {
  args: {
    level: "h1",
    children: "Heading 1",
  },
};
