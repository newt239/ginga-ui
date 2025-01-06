import React, { ComponentProps } from "react";

import { Button as AriaButton } from "react-aria-components";

import styles from "./Button.module.css";

import { cn } from "@/lib/utils";

export type ButtonProps = ComponentProps<typeof AriaButton> & {
  variant?: "filled" | "light" | "outline";
  [key: `data-${string}`]: string | number | boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className)}
      data-variant={variant}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
