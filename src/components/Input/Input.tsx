import React, { ComponentProps } from "react";

import { Input as AriaInput } from "react-aria-components";

import classes from "./Input.module.css";

import { cn } from "@/lib/utils";

export type InputProps = ComponentProps<typeof AriaInput>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <AriaInput
        type={type}
        className={cn(classes.root, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
