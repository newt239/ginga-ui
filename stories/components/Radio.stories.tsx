import { Radio, RadioGroup } from "@ginga-ui/core";
import "@ginga-ui/core/index.css";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Radio> = {
  title: "Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => (
    <RadioGroup>
      <Radio value="one">Option 1</Radio>
    </RadioGroup>
  ),
};

export const DisabledRadio: Story = {
  render: () => (
    <RadioGroup>
      <Radio value="one" disabled>
        Disabled Option
      </Radio>
    </RadioGroup>
  ),
};

export const RadioGroupWithDefaultValue: Story = {
  render: () => (
    <RadioGroup defaultValue="option2">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const RadioGroupWithDisabledOption: Story = {
  render: () => (
    <RadioGroup>
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2" disabled>
        Option 2 (Disabled)
      </Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
};
