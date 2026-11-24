"use client";

import { createContext, useContext } from "react";

import { cn } from "@ginga-ui/utils";
import {
  Button as AriaButton,
  ComboBox as AriaComboBox,
  composeRenderProps,
  FieldError as AriaFieldError,
  Input as AriaInput,
  Label as AriaLabel,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  Popover as AriaPopover,
  Text as AriaText,
} from "react-aria-components";

import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";
import type { ValidationResult } from "react-aria-components";

export type ComboBoxProps = OmitStrict<
  React.ComponentProps<typeof AriaComboBox>,
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
  children?: React.ReactNode;
  icon?: React.ReactNode;
  checkIcon?: React.ReactNode;
};

const ComboBoxCheckIconContext = createContext<React.ReactNode>(null);

export const ComboBox: React.FC<ComboBoxProps> = ({
  children,
  className,
  label,
  placeholder,
  disabled,
  required,
  invalid,
  readOnly,
  description,
  errorMessage,
  icon,
  checkIcon,
  ...props
}) => {
  return (
    <AriaComboBox
      isDisabled={disabled}
      isRequired={required}
      isInvalid={invalid}
      isReadOnly={readOnly}
      className={composeRenderProps(className, (c) => cn("ginga-combo-box", c))}
      {...props}
    >
      {label && (
        <AriaLabel className="ginga-combo-box-label">{label}</AriaLabel>
      )}
      <div className="ginga-combo-box-field">
        <AriaInput
          className="ginga-combo-box-input"
          placeholder={placeholder}
        />
        <AriaButton className="ginga-combo-box-button">
          <span className="ginga-combo-box-icon" aria-hidden="true">
            {icon}
          </span>
        </AriaButton>
      </div>
      {description && (
        <AriaText slot="description" className="ginga-combo-box-description">
          {description}
        </AriaText>
      )}
      <AriaFieldError className="ginga-combo-box-error">
        {errorMessage}
      </AriaFieldError>
      <AriaPopover className="ginga-combo-box-popover">
        <ComboBoxCheckIconContext.Provider value={checkIcon}>
          <AriaListBox className="ginga-combo-box-listbox">
            {children}
          </AriaListBox>
        </ComboBoxCheckIconContext.Provider>
      </AriaPopover>
    </AriaComboBox>
  );
};

export type ComboBoxItemProps = OmitStrict<
  React.ComponentProps<typeof AriaListBoxItem>,
  "isDisabled"
> & {
  disabled?: boolean;
};

export const ComboBoxItem: React.FC<ComboBoxItemProps> = ({
  children,
  disabled,
  className,
  textValue,
  ...props
}) => {
  const checkIcon = useContext(ComboBoxCheckIconContext);
  return (
    <AriaListBoxItem
      isDisabled={disabled}
      className={composeRenderProps(className, (c) =>
        cn("ginga-combo-box-item", c)
      )}
      textValue={
        textValue ?? (typeof children === "string" ? children : undefined)
      }
      {...props}
    >
      {(renderProps) => (
        <>
          <span className="ginga-combo-box-item-label">
            {typeof children === "function" ? children(renderProps) : children}
          </span>
          {renderProps.isSelected && checkIcon && (
            <span className="ginga-combo-box-item-check" aria-hidden="true">
              {checkIcon}
            </span>
          )}
        </>
      )}
    </AriaListBoxItem>
  );
};
