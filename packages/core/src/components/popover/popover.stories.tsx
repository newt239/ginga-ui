import { Button } from "../button";
import { Popover, PopoverTrigger } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popover> = {
  title: "Display/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: () => (
    <PopoverTrigger>
      <Button>詳細を表示</Button>
      <Popover>
        <p>これはポップオーバーの内容です。</p>
      </Popover>
    </PopoverTrigger>
  ),
};

export const Placements: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        padding: "6rem 2rem",
      }}
    >
      {(["top", "bottom", "left", "right"] as const).map((placement) => (
        <PopoverTrigger key={placement}>
          <Button variant="outline">{placement}</Button>
          <Popover placement={placement}>
            <p>{placement} に表示されます。</p>
          </Popover>
        </PopoverTrigger>
      ))}
    </div>
  ),
};

export const WithoutArrow: Story = {
  render: () => (
    <PopoverTrigger>
      <Button variant="light">矢印なし</Button>
      <Popover showArrow={false}>
        <p>矢印のないポップオーバーです。</p>
      </Popover>
    </PopoverTrigger>
  ),
};
