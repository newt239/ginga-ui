import ThemeClient from "@/lib/ai/themeClient";
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
    const themeClient = new ThemeClient(
      "openai",
      import.meta.env.STORYBOOK_OPENAI_API_KEY,
      {
        dangerouslyAllowBrowser: true,
      }
    );
    const onClick = async () => {
      await themeClient.generateTheme("fairy tale");
    };
    return (
      <Button variant="filled" isDisabled={false} onPress={onClick}>
        AI Generated Theme
      </Button>
    );
  },
};
