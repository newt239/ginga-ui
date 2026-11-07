"use client";

import { cn } from "@ginga-ui/utils";
import {
  composeRenderProps,
  RadioGroup as AriaRadioGroup,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type RadioGroupProps = OmitStrict<
  React.ComponentProps<typeof AriaRadioGroup>,
  "isDisabled" | "isRequired" | "isReadOnly" | "isInvalid"
> & {
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  disabled,
  required,
  readOnly,
  invalid,
  className,
  ...props
}) => {
  return (
    <AriaRadioGroup
      isDisabled={disabled}
      isRequired={required}
      isReadOnly={readOnly}
      isInvalid={invalid}
      className={composeRenderProps(className, (c) =>
        cn("ginga-radio-group", c)
      )}
      {...props}
    >
      {children}
    </AriaRadioGroup>
  );
};
