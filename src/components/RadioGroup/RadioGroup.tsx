import React, { ComponentProps } from "react";
import { RadioGroup as AriaRadioGroup } from "react-aria-components";

import { cn } from "@/lib/utils";
import classes from "./RadioGroup.module.css";

export type RadioGroupProps = ComponentProps<typeof AriaRadioGroup>;

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaRadioGroup className={cn(classes.root, className)} {...props}>
      {children}
    </AriaRadioGroup>
  );
};

export default RadioGroup;
