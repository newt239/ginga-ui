import { Monitor, Moon, Sun } from "lucide-react";

import { SegmentedControl, SegmentedControlItem } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SegmentedControl> = {
  title: "Forms/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  args: {
    "aria-label": "Time range",
    defaultValue: "week",
    children: (
      <>
        <SegmentedControlItem id="day">Day</SegmentedControlItem>
        <SegmentedControlItem id="week">Week</SegmentedControlItem>
        <SegmentedControlItem id="month">Month</SegmentedControlItem>
      </>
    ),
  },
};

export const Icons: Story = {
  args: {
    "aria-label": "Color theme",
    defaultValue: "system",
    size: "sm",
    children: (
      <>
        <SegmentedControlItem id="light" aria-label="Light">
          <Sun />
        </SegmentedControlItem>
        <SegmentedControlItem id="system" aria-label="System">
          <Monitor />
        </SegmentedControlItem>
        <SegmentedControlItem id="dark" aria-label="Dark">
          <Moon />
        </SegmentedControlItem>
      </>
    ),
  },
};
