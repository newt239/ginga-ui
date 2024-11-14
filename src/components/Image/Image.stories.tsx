import Image from "./Image";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Image> = {
  title: "Display/Image",
  component: Image,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const FirstStory: Story = {
  args: {
    src: "https://newt239.dev/images/roomkeeper.webp",
    alt: "Roomkeeperを利用しているシーン",
  },
};

export const Avator: Story = {
  args: {
    src: "https://newt239.dev/images/roomkeeper.webp",
    alt: "Roomkeeperを利用しているシーン",
    variant: "avatar",
  },
};
