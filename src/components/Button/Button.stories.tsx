import { generateTheme } from "@/lib/ai";
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

export const withAIGeneratedTheme: Story = {
  render: () => {
    const onClick = () => {
      generateTheme({
        apiKey: import.meta.env.STORYBOOK_OPENAI_API_KEY!,
        prompt: "fairy tale",
        options: {
          dangerouslyAllowBrowser: true,
        },
      });
    };
    return (
      <Button variant="filled" isDisabled={false} onPress={onClick}>
        AI Generated Theme
      </Button>
    );
  },
};
