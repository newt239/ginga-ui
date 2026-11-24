"use client";

import { cn } from "@ginga-ui/utils";
import {
  Button as AriaButton,
  composeRenderProps,
  FieldError as AriaFieldError,
  Group as AriaGroup,
  Input as AriaInput,
  Label as AriaLabel,
  NumberField as AriaNumberField,
  Text as AriaText,
} from "react-aria-components";

import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";
import type { ValidationResult } from "react-aria-components";

export type NumberFieldProps = OmitStrict<
  React.ComponentProps<typeof AriaNumberField>,
  "isDisabled" | "isRequired" | "isInvalid" | "isReadOnly" | "children"
> & {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  description?: React.ReactNode;
  errorMessage?:
    | React.ReactNode
    | ((validation: ValidationResult) => React.ReactNode);
  decrementIcon?: React.ReactNode;
  incrementIcon?: React.ReactNode;
};

export const NumberField: React.FC<NumberFieldProps> = ({
  className,
  label,
  placeholder,
  disabled,
  required,
  invalid,
  readOnly,
  description,
  errorMessage,
  decrementIcon,
  incrementIcon,
  ...props
}) => {
  return (
    <AriaNumberField
      isDisabled={disabled}
      isRequired={required}
      isInvalid={invalid}
      isReadOnly={readOnly}
      className={composeRenderProps(className, (c) =>
        cn("ginga-number-field", c)
      )}
      {...props}
    >
      {label && (
        <AriaLabel className="ginga-number-field-label">{label}</AriaLabel>
      )}
      <AriaGroup className="ginga-number-field-group">
        <AriaButton slot="decrement" className="ginga-number-field-button">
          <span
            className="ginga-number-field-icon"
            data-direction="decrement"
            aria-hidden="true"
          >
            {decrementIcon}
          </span>
        </AriaButton>
        <AriaInput
          className="ginga-number-field-input"
          placeholder={placeholder}
        />
        <AriaButton slot="increment" className="ginga-number-field-button">
          <span
            className="ginga-number-field-icon"
            data-direction="increment"
            aria-hidden="true"
          >
            {incrementIcon}
          </span>
        </AriaButton>
      </AriaGroup>
      {description && (
        <AriaText slot="description" className="ginga-number-field-description">
          {description}
        </AriaText>
      )}
      <AriaFieldError className="ginga-number-field-error">
        {errorMessage}
      </AriaFieldError>
    </AriaNumberField>
  );
};
