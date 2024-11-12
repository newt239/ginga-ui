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
    children: "Default Checkbox",
  },
};

export const Selected: Story = {
  args: {
    children: "Selected Checkbox",
    isSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Checkbox",
    isDisabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    children: "Disabled Selected Checkbox",
    isDisabled: true,
    isSelected: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const WithCustomLabel: Story = {
  args: {
    children: (
      <span style={{ display: "flex", alignItems: "center" }}>
        Custom Label{" "}
        <span style={{ marginLeft: "0.5em", color: "red" }}>*</span>
      </span>
    ),
  },
};

// TODO: must specify the value prop for each Checkbox
export const CheckboxGroupExample: Story = {
  render: () => (
    <CheckboxGroup>
      <Checkbox value="one">Option 1</Checkbox>
      <Checkbox value="two">Option 2</Checkbox>
      <Checkbox value="three">Option 3</Checkbox>
    </CheckboxGroup>
  ),
};
