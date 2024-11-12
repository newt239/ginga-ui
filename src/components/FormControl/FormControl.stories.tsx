import FormControl from "../FormControl/FormControl";
import Input from "../Input/Input";

import type { Meta, StoryObj } from "@storybook/react";

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

export const WithTextarea: Story = {
  args: {
    title: "Description // wip",
    children: <textarea placeholder="Enter a detailed description" rows={4} />,
  },
};
