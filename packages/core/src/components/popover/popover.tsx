"use client";

import { cn } from "@ginga-ui/utils";
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  OverlayArrow as AriaOverlayArrow,
  Popover as AriaPopover,
  composeRenderProps,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type PopoverTriggerProps = React.ComponentProps<
  typeof AriaDialogTrigger
>;

export const PopoverTrigger: React.FC<PopoverTriggerProps> = (props) => {
  return <AriaDialogTrigger {...props} />;
};

export type PopoverProps = OmitStrict<
  React.ComponentProps<typeof AriaPopover>,
  "children"
> & {
  children?: React.ReactNode;
  showArrow?: boolean;
};

const ARROW_SIZE = 12;

export const Popover: React.FC<PopoverProps> = ({
  children,
  className,
  placement = "bottom",
  offset = 8,
  showArrow = true,
  ...props
}) => {
  return (
    <AriaPopover
      placement={placement}
      offset={showArrow ? offset + ARROW_SIZE / 2 : offset}
      className={composeRenderProps(className, (c) => cn("ginga-popover", c))}
      {...props}
    >
      {showArrow && (
        <AriaOverlayArrow className="ginga-popover-arrow">
          <svg
            width={ARROW_SIZE}
            height={ARROW_SIZE}
            viewBox="0 0 12 12"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </AriaOverlayArrow>
      )}
      <AriaDialog className="ginga-popover-dialog">{children}</AriaDialog>
    </AriaPopover>
  );
};
