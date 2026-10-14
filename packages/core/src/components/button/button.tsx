"use client";

import { cn } from "@ginga-ui/utils";
import { Button as AriaButton } from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type ButtonVariant =
  | "filled"
  | "light"
  | "outline"
  | "ghost"
  | "reverse";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = OmitStrict<
  React.ComponentProps<typeof AriaButton>,
  "isDisabled"
> & {
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "filled",
  size = "md",
  disabled = false,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <AriaButton
      className={cn("ginga-button", className)}
      data-variant={variant}
      data-size={size}
      isDisabled={disabled}
      {...props}
    >
      {(renderProps) => (
        <>
          {startIcon}
          {typeof children === "function" ? children(renderProps) : children}
          {endIcon}
        </>
      )}
    </AriaButton>
  );
};
