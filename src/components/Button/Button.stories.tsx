import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "light", "outline"],
    },
    isDisabled: { control: "boolean" },
    onPress: { action: "pressed" },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Filled Button",
    variant: "filled",
  },
};

export const Light: Story = {
  args: {
    children: "Light Button",
    variant: "light",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    isDisabled: true,
  },
};
