"use client";

import { cn } from "@ginga-ui/utils";
import { composeRenderProps, Input as AriaInput } from "react-aria-components";
import "./index.css";

export type InputProps = React.ComponentProps<typeof AriaInput>;

export const Input: React.FC<InputProps> = ({ className, type, ...props }) => {
  return (
    <AriaInput
      type={type}
      className={composeRenderProps(className, (c) => cn("ginga-input", c))}
      {...props}
    />
  );
};
