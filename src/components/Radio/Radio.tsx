import React, { ComponentProps } from "react";
import { Radio as AriaRadio } from "react-aria-components";

import { cn } from "@/lib/utils";
import classes from "./Radio.module.css";

export type RadioProps = ComponentProps<typeof AriaRadio>;

const Radio: React.FC<RadioProps> = ({ children, className, ...props }) => {
  return (
    <AriaRadio className={cn(classes.root, className)} {...props}>
      {children}
    </AriaRadio>
  );
};

export default Radio;
