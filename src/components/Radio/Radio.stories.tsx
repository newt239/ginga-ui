import RadioGroup from "../RadioGroup/RadioGroup";

import Radio from "./Radio";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Radio> = {
  title: "Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean" },
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup>
      <Radio {...args}>Option 1</Radio>
    </RadioGroup>
  ),
};

export const DisabledRadio: Story = {
  render: (args) => (
    <RadioGroup>
      <Radio {...args} isDisabled>
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
      <Radio value="option2" isDisabled>
        Option 2 (Disabled)
      </Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
};
