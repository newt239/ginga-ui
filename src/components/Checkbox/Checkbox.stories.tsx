import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";

import Checkbox from "./Checkbox";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean" },
    isSelected: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
  },
};

export const Selected: Story = {
  args: {
    label: "Selected Checkbox",
    isSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    isDisabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    label: "Disabled Selected Checkbox",
    isDisabled: true,
    isSelected: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

// TODO: must specify the value prop for each Checkbox
export const CheckboxGroupExample: Story = {
  render: () => (
    <CheckboxGroup>
      <Checkbox value="one" label="Option 1" />
      <Checkbox value="two" label="Option 2" />
      <Checkbox value="three" label="Option 3" />
    </CheckboxGroup>
  ),
};
