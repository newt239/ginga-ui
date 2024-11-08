import React, { ComponentProps } from "react";

import { Button as AriaButton } from "react-aria-components";

import styles from "./Button.module.css";

import { cn } from "@/lib/utils";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  ComponentProps<typeof AriaButton> & {
    variant?: "primary" | "secondary";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    [key: `data-${string}`]: string | number | boolean;
  };

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <AriaButton
      className={cn(styles["button"], className)}
      data-variant={variant}
      {...props}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <>{children}</>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </AriaButton>
  );
};

export default Button;
