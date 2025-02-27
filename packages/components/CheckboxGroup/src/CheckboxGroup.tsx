"use client";

import { cn } from "@ginga-ui/utils";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";

import styles from "./CheckboxGroup.module.css";

export type CheckboxGroupProps = React.ComponentProps<typeof AriaCheckboxGroup>;

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaCheckboxGroup
      className={cn(styles["checkbox-group"], className)}
      {...props}
    >
      {children}
    </AriaCheckboxGroup>
  );
};
