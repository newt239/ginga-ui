import React, { ComponentProps } from "react";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";

import { cn } from "@/lib/utils";
import classes from "./CheckboxGroup.module.css";

export type CheckboxGroupProps = ComponentProps<typeof AriaCheckboxGroup>;

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaCheckboxGroup className={cn(classes.root, className)} {...props}>
      {children}
    </AriaCheckboxGroup>
  );
};

export default CheckboxGroup;
