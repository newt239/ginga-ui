"use client";

import { cn } from "@ginga-ui/utils";
import { VisuallyHidden } from "react-aria";
import {
  Button as AriaButton,
  composeRenderProps,
  FieldError as AriaFieldError,
  Input as AriaInput,
  Label as AriaLabel,
  SearchField as AriaSearchField,
  Text as AriaText,
} from "react-aria-components";

import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";
import type { ValidationResult } from "react-aria-components";

export type SearchFieldProps = OmitStrict<
  React.ComponentProps<typeof AriaSearchField>,
  "isDisabled" | "isRequired" | "isInvalid" | "isReadOnly" | "children"
> & {
  label?: string;
  showLabel?: boolean;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  description?: React.ReactNode;
  errorMessage?:
    | React.ReactNode
    | ((validation: ValidationResult) => React.ReactNode);
  icon?: React.ReactNode;
  clearIcon?: React.ReactNode;
};

export const SearchField: React.FC<SearchFieldProps> = ({
  className,
  label,
  showLabel = false,
  placeholder,
  disabled,
  required,
  invalid,
  readOnly,
  description,
  errorMessage,
  icon,
  clearIcon,
  ...props
}) => {
  return (
    <AriaSearchField
      isDisabled={disabled}
      isRequired={required}
      isInvalid={invalid}
      isReadOnly={readOnly}
      className={composeRenderProps(className, (c) =>
        cn("ginga-search-field", c)
      )}
      {...props}
    >
      {label &&
        (showLabel ? (
          <AriaLabel className="ginga-search-field-label">{label}</AriaLabel>
        ) : (
          <VisuallyHidden>
            <AriaLabel>{label}</AriaLabel>
          </VisuallyHidden>
        ))}
      <div className="ginga-search-field-field">
        {icon && (
          <span className="ginga-search-field-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <AriaInput
          className="ginga-search-field-input"
          placeholder={placeholder}
        />
        <AriaButton className="ginga-search-field-clear">
          <span className="ginga-search-field-clear-icon" aria-hidden="true">
            {clearIcon}
          </span>
        </AriaButton>
      </div>
      {description && (
        <AriaText slot="description" className="ginga-search-field-description">
          {description}
        </AriaText>
      )}
      <AriaFieldError className="ginga-search-field-error">
        {errorMessage}
      </AriaFieldError>
    </AriaSearchField>
  );
};
