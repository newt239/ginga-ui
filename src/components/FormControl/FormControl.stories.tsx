import type { Meta, StoryObj } from "@storybook/react";
import FormControl from "../FormControl/FormControl";
import Input from "../Input/Input";

const meta: Meta<typeof FormControl> = {
  title: "Forms/FormControl",
  component: FormControl,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormControl>;

export const Default: Story = {
  args: {
    title: "フォームコントロール名",
    children: <Input placeholder="プレースホルダーを表示できます" />,
  },
};

export const WithCustomId: Story = {
  args: {
    title: "Email",
    htmlFor: "custom-email-id",
    children: (
      <Input id="custom-email-id" type="email" placeholder="Enter your email" />
    ),
  },
};

export const WithLongLabel: Story = {
  args: {
    title: "Very Long Label That Might Wrap to Multiple Lines",
    children: <Input placeholder="Enter value" />,
  },
};

export const WithTextarea: Story = {
  args: {
    title: "Description",
    children: <textarea placeholder="Enter a detailed description" rows={4} />,
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Custom Styled",
    className: "custom-form-control",
    children: <Input placeholder="Custom styled input" />,
  },
};

export const InteractiveExample: Story = {
  args: {
    title: "Interactive Input",
    children: <Input placeholder="Type something..." />,
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input");
    if (input) {
      input.focus();
      input.value = "Hello, Storybook!";
    }
  },
};
