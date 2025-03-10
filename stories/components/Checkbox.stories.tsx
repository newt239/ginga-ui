import "@ginga-ui/core/index.css";

import {
  Checkbox,
  CheckboxGroup,
} from "../../packages/components/checkbox/src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    selected: { control: "boolean" },
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
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    label: "Disabled Selected Checkbox",
    disabled: true,
    selected: true,
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
