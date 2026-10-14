"use client";

import { cn } from "@ginga-ui/utils";
import { Checkbox as AriaCheckbox } from "react-aria-components";

import { CheckIcon, MinusIcon } from "../../icons";
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
      className={cn("ginga-checkbox", className)}
      {...props}
      aria-label={label || props["aria-label"]}
    >
      <span className="ginga-checkbox-input">
        <CheckIcon className="ginga-checkbox-check" strokeWidth={3} />
        <MinusIcon className="ginga-checkbox-minus" strokeWidth={3} />
      </span>
      {label}
    </AriaCheckbox>
  );
};
