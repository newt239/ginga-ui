"use client";

import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";

import styles from "./CheckboxGroup.module.css";

import { cn } from "@/lib/utils";

export type CheckboxGroupProps = React.ComponentProps<typeof AriaCheckboxGroup>;

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
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

export default CheckboxGroup;
