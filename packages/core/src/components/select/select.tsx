"use client";

import { createContext, useContext } from "react";

import { cn } from "@ginga-ui/utils";
import {
  composeRenderProps,
  FieldError as AriaFieldError,
  Label as AriaLabel,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  Popover as AriaPopover,
  Select as AriaSelect,
  Button as AriaButton,
  SelectValue as AriaSelectValue,
  Text as AriaText,
} from "react-aria-components";

import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";
import type { ValidationResult } from "react-aria-components";

export type SelectProps = OmitStrict<
  React.ComponentProps<typeof AriaSelect>,
  "isDisabled" | "isRequired" | "isInvalid" | "children"
> & {
  label: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  description?: React.ReactNode;
  errorMessage?:
    | React.ReactNode
    | ((validation: ValidationResult) => React.ReactNode);
  children?: React.ReactNode;
  icon?: React.ReactNode;
  checkIcon?: React.ReactNode;
};

const SelectCheckIconContext = createContext<React.ReactNode>(null);

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  label,
  disabled,
  required,
  invalid,
  description,
  errorMessage,
  icon,
  checkIcon,
  ...props
}) => {
  return (
    <AriaSelect
      isDisabled={disabled}
      isRequired={required}
      isInvalid={invalid}
      className={composeRenderProps(className, (c) => cn("ginga-select", c))}
      {...props}
    >
      <AriaLabel className="ginga-select-label">{label}</AriaLabel>
      <AriaButton className="ginga-select-button">
        <AriaSelectValue className="ginga-select-value" />
        <span className="ginga-select-icon" aria-hidden="true">
          {icon}
        </span>
      </AriaButton>
      {description && (
        <AriaText slot="description" className="ginga-select-description">
          {description}
        </AriaText>
      )}
      <AriaFieldError className="ginga-select-error">
        {errorMessage}
      </AriaFieldError>
      <AriaPopover className="ginga-select-popover">
        <SelectCheckIconContext.Provider value={checkIcon}>
          <AriaListBox className="ginga-select-listbox">{children}</AriaListBox>
        </SelectCheckIconContext.Provider>
      </AriaPopover>
    </AriaSelect>
  );
};

Select.displayName = "Select";

export type SelectItemProps = OmitStrict<
  React.ComponentProps<typeof AriaListBoxItem>,
  "isDisabled"
> & {
  disabled?: boolean;
};

export const SelectItem: React.FC<SelectItemProps> = ({
  children,
  disabled,
  className,
  textValue,
  ...props
}) => {
  const checkIcon = useContext(SelectCheckIconContext);
  return (
    <AriaListBoxItem
      isDisabled={disabled}
      className={composeRenderProps(className, (c) =>
        cn("ginga-select-item", c)
      )}
      textValue={
        textValue ?? (typeof children === "string" ? children : undefined)
      }
      {...props}
    >
      {(renderProps) => (
        <>
          <span className="ginga-select-item-label">
            {typeof children === "function" ? children(renderProps) : children}
          </span>
          {renderProps.isSelected && checkIcon && (
            <span className="ginga-select-item-check" aria-hidden="true">
              {checkIcon}
            </span>
          )}
        </>
      )}
    </AriaListBoxItem>
  );
};

SelectItem.displayName = "SelectItem";
