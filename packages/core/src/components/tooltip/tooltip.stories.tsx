import { Settings } from "lucide-react";

import { Button } from "../button";
import { Tooltip, TooltipTrigger } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "Display/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <div style={{ padding: "4rem" }}>
      <TooltipTrigger>
        <Button variant="ghost" aria-label="設定">
          <Settings />
        </Button>
        <Tooltip>設定</Tooltip>
      </TooltipTrigger>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        padding: "4rem 2rem",
      }}
    >
      {(["top", "bottom", "left", "right"] as const).map((placement) => (
        <TooltipTrigger key={placement}>
          <Button variant="outline">{placement}</Button>
          <Tooltip placement={placement}>{placement} に表示されます</Tooltip>
        </TooltipTrigger>
      ))}
    </div>
  ),
};

export const WithoutArrow: Story = {
  render: () => (
    <div style={{ padding: "4rem" }}>
      <TooltipTrigger>
        <Button variant="light">矢印なし</Button>
        <Tooltip showArrow={false}>矢印のないツールチップです</Tooltip>
      </TooltipTrigger>
    </div>
  ),
};
