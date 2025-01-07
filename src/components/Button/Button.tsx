"use client";

import { Button as AriaButton } from "react-aria-components";

import styles from "./Button.module.css";

import { cn } from "@/lib/utils";

export type ButtonProps = React.ComponentProps<typeof AriaButton> & {
  variant?: "filled" | "light" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <AriaButton
      className={cn(styles.button, className)}
      data-variant={variant}
      {...props}
    >
      {children}
    </AriaButton>
  );
};

export default Button;
