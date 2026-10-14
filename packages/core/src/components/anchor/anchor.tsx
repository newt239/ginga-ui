"use client";

import { cn } from "@ginga-ui/utils";
import { Link as AriaLink } from "react-aria-components";
import "../button/index.css";
import "./index.css";

import type { ButtonSize, ButtonVariant } from "../button";
import type { OmitStrict } from "@ginga-ui/utils";

export type AnchorProps = OmitStrict<
  React.ComponentProps<typeof AriaLink>,
  "isDisabled"
> & {
  variant?: "default" | "button";
  buttonVariant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
};

export const Anchor: React.FC<AnchorProps> = ({
  variant = "default",
  buttonVariant = "filled",
  size = "md",
  disabled,
  className,
  ...props
}) => {
  if (variant === "button") {
    return (
      <AriaLink
        data-variant={buttonVariant}
        data-size={size}
        isDisabled={disabled}
        className={cn("ginga-button", className)}
        {...props}
      />
    );
  }

  return (
    <AriaLink
      isDisabled={disabled}
      className={cn("ginga-anchor", className)}
      {...props}
    />
  );
};
