import React, { ComponentProps } from "react";

import { Radio as AriaRadio } from "react-aria-components";

import classes from "./Radio.module.css";

import { cn } from "@/lib/utils";

export type RadioProps = ComponentProps<typeof AriaRadio>;

const Radio: React.FC<RadioProps> = ({ children, className, ...props }) => {
  return (
    <AriaRadio className={cn(classes.root, className)} {...props}>
      {children}
    </AriaRadio>
  );
};

export default Radio;
