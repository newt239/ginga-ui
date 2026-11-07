"use client";

import { cn } from "@ginga-ui/utils";
import {
  CheckboxGroup as AriaCheckboxGroup,
  composeRenderProps,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type CheckboxGroupProps = OmitStrict<
  React.ComponentProps<typeof AriaCheckboxGroup>,
  "isDisabled" | "isRequired" | "isReadOnly" | "isInvalid"
> & {
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  className,
  disabled,
  required,
  readOnly,
  invalid,
  ...props
}) => {
  return (
    <AriaCheckboxGroup
      className={composeRenderProps(className, (c) =>
        cn("ginga-checkbox-group", c)
      )}
      isDisabled={disabled}
      isRequired={required}
      isReadOnly={readOnly}
      isInvalid={invalid}
      {...props}
    >
      {children}
    </AriaCheckboxGroup>
  );
};
