import Link from "./Link";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Display/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
    },
    isDisabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Click me",
    href: "https://example.com",
  },
};

export const ExternalLink: Story = {
  args: {
    children: "External Link",
    href: "https://example.com",
    target: "_blank",
  },
};

export const DisabledLink: Story = {
  args: {
    children: "Disabled Link",
    href: "https://example.com",
    isDisabled: true,
  },
};

export const CustomClassLink: Story = {
  args: {
    children: "Custom Class Link",
    href: "https://example.com",
    className: "custom-link-class",
  },
};

export const LinkWithIcon: Story = {
  args: {
    children: (
      <>
        <span style={{ marginRight: "0.5em" }}>📎</span>
        Link with Icon
      </>
    ),
    href: "https://example.com",
  },
};
