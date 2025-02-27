"use client";

import { cn } from "@ginga-ui/utils";
import { Checkbox as AriaCheckbox } from "react-aria-components";

import styles from "./checkbox.module.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type CheckboxProps = OmitStrict<
  React.ComponentProps<typeof AriaCheckbox>,
  "isDisabled" | "isRequired" | "isIndeterminate" | "isSelected"
> & {
  label?: string;
  disabled?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  selected?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled,
  required,
  indeterminate,
  selected,
  className,
  ...props
}) => {
  return (
    <AriaCheckbox
      isDisabled={disabled}
      isRequired={required}
      isIndeterminate={indeterminate}
      isSelected={selected}
      className={cn(styles.checkbox, className)}
      {...props}
      aria-label={label || props["aria-label"]}
    >
      <div className={styles["checkbox-input"]}>
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {label}
    </AriaCheckbox>
  );
};
