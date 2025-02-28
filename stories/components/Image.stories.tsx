import { Image } from "@ginga-ui/core";

import "@ginga-ui/core/index.css";

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
    src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543",
    alt: "白い背景の上に、クリスマスや冬を連想させる緑の枝や葉、赤い実などの植物が四隅に配置されているフラットレイデザイン。",
  },
};

export const Avator: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543",
    alt: "白い背景の上に、クリスマスや冬を連想させる緑の枝や葉、赤い実などの植物が四隅に配置されているフラットレイデザイン。",
    variant: "avatar",
  },
};
