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

export const SecondStory: Story = {
  args: {
    level: "h2",
    children: "Heading 2",
  },
};

export const ThirdStory: Story = {
  args: {
    level: "h3",
    children: "Heading 3",
  },
};

export const FourthStory: Story = {
  args: {
    level: "h4",
    children: "Heading 4",
  },
};

export const FifthStory: Story = {
  args: {
    level: "h5",
    children: "Heading 5",
  },
};

export const SixthStory: Story = {
  args: {
    level: "h6",
    children: "Heading 6",
  },
};
