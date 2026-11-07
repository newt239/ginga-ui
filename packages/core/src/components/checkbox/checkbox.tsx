"use client";

import { cn } from "@ginga-ui/utils";
import {
  Checkbox as AriaCheckbox,
  composeRenderProps,
} from "react-aria-components";

import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type CheckboxProps = OmitStrict<
  React.ComponentProps<typeof AriaCheckbox>,
  | "isDisabled"
  | "isRequired"
  | "isIndeterminate"
  | "isSelected"
  | "isReadOnly"
  | "isInvalid"
> & {
  label?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  selected?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  icon?: React.ReactNode;
  indeterminateIcon?: React.ReactNode;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled,
  required,
  indeterminate,
  selected,
  readOnly,
  invalid,
  icon,
  indeterminateIcon,
  className,
  children,
  ...props
}) => {
  return (
    <AriaCheckbox
      isDisabled={disabled}
      isRequired={required}
      isIndeterminate={indeterminate}
      isSelected={selected}
      isReadOnly={readOnly}
      isInvalid={invalid}
      className={composeRenderProps(className, (c) => cn("ginga-checkbox", c))}
      {...props}
    >
      {(renderProps) => (
        <>
          <span className="ginga-checkbox-input">
            <span className="ginga-checkbox-check" aria-hidden="true">
              {icon}
            </span>
            <span className="ginga-checkbox-minus" aria-hidden="true">
              {indeterminateIcon}
            </span>
          </span>
          {typeof children === "function"
            ? children(renderProps)
            : (children ?? label)}
        </>
      )}
    </AriaCheckbox>
  );
};
