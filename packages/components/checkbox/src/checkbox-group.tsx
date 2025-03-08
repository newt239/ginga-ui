"use client";

import { cn } from "@ginga-ui/utils";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";
import "./index.css";

export type CheckboxGroupProps = React.ComponentProps<typeof AriaCheckboxGroup>;

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaCheckboxGroup
      className={cn("ginga-checkbox-group", className)}
      {...props}
    >
      {children}
    </AriaCheckboxGroup>
  );
};
