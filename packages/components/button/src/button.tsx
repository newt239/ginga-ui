"use client";

import { cn } from "@ginga-ui/utils";
import { Button as AriaButton } from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type ButtonProps = OmitStrict<
  React.ComponentProps<typeof AriaButton>,
  "isDisabled"
> & {
  disabled?: boolean;
  variant?: "filled" | "light" | "outline" | "reverse";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  disabled = false,
  ...props
}) => {
  return (
    <AriaButton
      className={cn("ginga-button", className)}
      data-variant={variant}
      isDisabled={disabled}
      {...props}
    >
      {children}
    </AriaButton>
  );
};
