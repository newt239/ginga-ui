"use client";

import { cn } from "@ginga-ui/utils";
import { Link as AriaLink } from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type AnchorProps = OmitStrict<
  React.ComponentProps<typeof AriaLink>,
  "isDisabled"
> & {
  variant?: "default" | "button";
  disabled?: boolean;
};

export const Anchor: React.FC<AnchorProps> = ({
  variant = "default",
  disabled,
  className,
  ...props
}) => {
  return (
    <AriaLink
      data-variant={variant}
      isDisabled={disabled}
      className={cn("ginga-anchor", className)}
      {...props}
    />
  );
};
