import {
  ArrowUpRight,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  Globe,
  LoaderCircle,
  Terminal,
} from "lucide-react";

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Trace> = {
  title: "Display/Trace",
  component: Trace,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Trace>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TraceLine>
          <TraceIcon>
            <CircleCheck />
          </TraceIcon>
          <TraceTitle>Ran pnpm --version</TraceTitle>
        </TraceLine>
        <TraceCollapsible>
          <TraceCollapsibleTrigger icon={<ChevronRight />}>
            <TraceLine>
              <TraceIcon>
                <Terminal />
              </TraceIcon>
              <TraceTitle>Ran git diff --stat</TraceTitle>
              <TraceDescription>+2 -1</TraceDescription>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            package.json | 2 +- 1 file changed
          </TraceCollapsibleContent>
        </TraceCollapsible>
        <TraceLine status="error">
          <TraceIcon>
            <CircleAlert />
          </TraceIcon>
          <TraceTitle>Failed to run pnpm install --frozen-lockfile</TraceTitle>
        </TraceLine>
        <TraceLine status="running">
          <TraceIcon>
            <LoaderCircle />
          </TraceIcon>
          <TraceTitle>Searching the web for lockfile errors</TraceTitle>
        </TraceLine>
        <a href="https://pnpm.io" aria-label="Read pnpm documentation">
          <TraceLine>
            <TraceIcon>
              <Globe />
            </TraceIcon>
            <TraceTitle>Read pnpm documentation</TraceTitle>
            <TraceIcon>
              <ArrowUpRight />
            </TraceIcon>
          </TraceLine>
        </a>
      </>
    ),
  },
};
