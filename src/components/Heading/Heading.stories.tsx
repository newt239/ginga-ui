import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const FirstStory: Story = {
  args: {
    level: "h1",
    children: "Heading 1",
  },
};
