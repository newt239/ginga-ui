"use client";

import { cn } from "@ginga-ui/utils";
import { Checkbox as AriaCheckbox } from "react-aria-components";

import "./index.css";

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
  icon?: React.ReactNode;
  indeterminateIcon?: React.ReactNode;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled,
  required,
  indeterminate,
  selected,
  icon,
  indeterminateIcon,
  className,
  ...props
}) => {
  return (
    <AriaCheckbox
      isDisabled={disabled}
      isRequired={required}
      isIndeterminate={indeterminate}
      isSelected={selected}
      className={cn("ginga-checkbox", className)}
      {...props}
      aria-label={label || props["aria-label"]}
    >
      <span className="ginga-checkbox-input">
        <span className="ginga-checkbox-check" aria-hidden="true">
          {icon}
        </span>
        <span className="ginga-checkbox-minus" aria-hidden="true">
          {indeterminateIcon}
        </span>
      </span>
      {label}
    </AriaCheckbox>
  );
};
