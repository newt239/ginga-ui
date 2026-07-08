"use client";

import { cn } from "@ginga-ui/utils";
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  OverlayArrow as AriaOverlayArrow,
  Popover as AriaPopover,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type PopoverTriggerProps = React.ComponentProps<
  typeof AriaDialogTrigger
>;

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({
  children,
  ...props
}) => {
  return <AriaDialogTrigger {...props}>{children}</AriaDialogTrigger>;
};

export type PopoverProps = OmitStrict<
  React.ComponentProps<typeof AriaPopover>,
  "children"
> & {
  children?: React.ReactNode;
  showArrow?: boolean;
};

export const Popover: React.FC<PopoverProps> = ({
  children,
  className,
  placement = "bottom",
  showArrow = true,
  ...props
}) => {
  return (
    <AriaPopover
      className={cn("ginga-popover", className)}
      placement={placement}
      {...props}
    >
      {showArrow && (
        <AriaOverlayArrow className="ginga-popover-arrow">
          <svg width={12} height={12} viewBox="0 0 12 12" aria-hidden="true">
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </AriaOverlayArrow>
      )}
      <AriaDialog className="ginga-popover-dialog">{children}</AriaDialog>
    </AriaPopover>
  );
};
