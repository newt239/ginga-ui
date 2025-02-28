import { Button } from "@ginga-ui/core";

import "@ginga-ui/core/index.css";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "light", "outline", "reverse"],
    },
    disabled: { control: "boolean" },
    onPress: { action: "pressed" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Filled Button",
    variant: "filled",
    onPress: () => window.confirm("Filled Button pressed"),
  },
};

export const Light: Story = {
  args: {
    children: "Light Button",
    variant: "light",
    onPress: () => window.confirm("Light Button pressed"),
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    onPress: () => window.confirm("Outline Button pressed"),
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
    onPress: () => window.confirm("Disabled Button pressed"),
  },
};

export const Reverse: Story = {
  args: {
    children: "Reverse Button",
    variant: "reverse",
    onPress: () => window.confirm("Reverse Button pressed"),
  },
};
