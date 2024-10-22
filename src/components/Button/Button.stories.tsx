import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    isDisabled: { control: "boolean" },
    onPress: { action: "pressed" },
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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    isDisabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    leftIcon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 3.5V12.5M3.5 8H12.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    children: "Add Item",
    variant: "primary",
  },
};

export const ButtonSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button className="text-sm p-2">Small</Button>
      <Button className="p-3">Medium</Button>
      <Button className="text-lg p-4">Large</Button>
    </div>
  ),
};

export const ButtonVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
};

export const LoadingState: Story = {
  args: {
    children: (
      <>
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        Loading...
      </>
    ),
    isDisabled: true,
    variant: "primary",
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Button variant="secondary">Previous</Button>
      <Button variant="primary">Next</Button>
    </div>
  ),
};
