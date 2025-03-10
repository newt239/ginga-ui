import "@ginga-ui/core/index.css";

import { Anchor } from "../../packages/components/anchor/src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Anchor> = {
  title: "Display/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    children: "Click me",
    href: "https://example.com",
  },
};

export const ExternalAnchor: Story = {
  args: {
    children: "External Link",
    href: "https://example.com",
    target: "_blank",
  },
};

export const DisabledAnchor: Story = {
  args: {
    children: "Disabled Link",
    href: "https://example.com",
    disabled: true,
  },
};

export const ButtonAnchor: Story = {
  args: {
    children: "Button Link",
    href: "https://example.com",
    variant: "button",
  },
};
