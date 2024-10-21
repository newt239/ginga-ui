import React, { ComponentProps } from "react";
import { Checkbox as AriaCheckbox } from "react-aria-components";

import { cn } from "@/lib/utils";
import classes from "./Checkbox.module.css";

export type CheckboxProps = ComponentProps<typeof AriaCheckbox>;

const Checkbox: React.FC<CheckboxProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaCheckbox className={cn(classes.root, className)} {...props}>
      <>
        <div className={classes.checkbox}>
          <svg viewBox="0 0 18 18" aria-hidden="true">
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </div>
        {children}
      </>
    </AriaCheckbox>
  );
};

export default Checkbox;
