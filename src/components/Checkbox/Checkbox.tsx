import React, { ComponentProps } from "react";

import { Checkbox as AriaCheckbox } from "react-aria-components";

import styles from "./Checkbox.module.css";

import { cn } from "@/lib/utils";

export type CheckboxProps = ComponentProps<typeof AriaCheckbox> & {
  label: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, className, ...props }) => {
  return (
    <AriaCheckbox className={cn(styles.checkbox, className)} {...props}>
      <div className={styles["checkbox-input"]}>
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {label}
    </AriaCheckbox>
  );
};

export default Checkbox;
