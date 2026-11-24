import { Minus, Plus } from "lucide-react";

import { NumberField } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NumberField> = {
  title: "Forms/NumberField",
  component: NumberField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const Default: Story = {
  args: {
    label: "数量",
    defaultValue: 1,
    minValue: 0,
    maxValue: 10,
  },
};

export const WithIcons: Story = {
  args: {
    label: "人数",
    defaultValue: 2,
    minValue: 1,
    decrementIcon: <Minus />,
    incrementIcon: <Plus />,
  },
};

export const Currency: Story = {
  args: {
    label: "金額",
    defaultValue: 1500,
    step: 100,
    formatOptions: { style: "currency", currency: "JPY" },
    description: "100 円単位で指定します",
  },
};

export const Disabled: Story = {
  args: {
    label: "数量",
    defaultValue: 3,
    disabled: true,
  },
};
