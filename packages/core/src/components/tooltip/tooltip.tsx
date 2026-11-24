"use client";

import { cn } from "@ginga-ui/utils";
import {
  composeRenderProps,
  OverlayArrow as AriaOverlayArrow,
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type TooltipTriggerProps = OmitStrict<
  React.ComponentProps<typeof AriaTooltipTrigger>,
  "isDisabled"
> & {
  disabled?: boolean;
};

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  disabled,
  ...props
}) => {
  return <AriaTooltipTrigger isDisabled={disabled} {...props} />;
};

export type TooltipProps = OmitStrict<
  React.ComponentProps<typeof AriaTooltip>,
  "children"
> & {
  children?: React.ReactNode;
  showArrow?: boolean;
};

const ARROW_SIZE = 8;

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  className,
  placement = "top",
  offset = 6,
  showArrow = true,
  ...props
}) => {
  return (
    <AriaTooltip
      placement={placement}
      offset={showArrow ? offset + ARROW_SIZE / 2 : offset}
      className={composeRenderProps(className, (c) => cn("ginga-tooltip", c))}
      {...props}
    >
      {showArrow && (
        <AriaOverlayArrow className="ginga-tooltip-arrow">
          <svg
            width={ARROW_SIZE}
            height={ARROW_SIZE}
            viewBox="0 0 8 8"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </AriaOverlayArrow>
      )}
      {children}
    </AriaTooltip>
  );
};
