import React, { ComponentProps } from "react";
import { Button as AriaButton } from "react-aria-components";

import { cn } from "@/lib/utils";
import classes from "./Button.module.css";

export type ButtonProps = ComponentProps<typeof AriaButton>;

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <AriaButton className={cn(classes.root, className)} {...props}>
      {children}
    </AriaButton>
  );
};

export default Button;
