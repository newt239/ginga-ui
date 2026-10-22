"use client";

import { createContext, useContext } from "react";

import { cn } from "@ginga-ui/utils";
import {
  Label as AriaLabel,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  Popover as AriaPopover,
  Select as AriaSelect,
  Button as AriaButton,
  SelectValue as AriaSelectValue,
} from "react-aria-components";

import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type SelectProps = OmitStrict<
  React.ComponentProps<typeof AriaSelect>,
  "isDisabled" | "isRequired" | "children"
> & {
  label: string;
  disabled?: boolean;
  required?: boolean;
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
  icon,
  checkIcon,
  ...props
}) => {
  return (
    <AriaSelect
      isDisabled={disabled}
      isRequired={required}
      className={cn("ginga-select", className)}
      {...props}
    >
      <AriaLabel className="ginga-select-label">{label}</AriaLabel>
      <AriaButton className="ginga-select-button">
        <AriaSelectValue className="ginga-select-value" />
        <span className="ginga-select-icon" aria-hidden="true">
          {icon}
        </span>
      </AriaButton>
      <AriaPopover className="ginga-select-popover">
        <SelectCheckIconContext.Provider value={checkIcon}>
          <AriaListBox className="ginga-select-listbox">{children}</AriaListBox>
        </SelectCheckIconContext.Provider>
      </AriaPopover>
    </AriaSelect>
  );
};

Select.displayName = "Select";

export type SelectItemProps = React.ComponentProps<typeof AriaListBoxItem>;

export const SelectItem: React.FC<SelectItemProps> = ({
  children,
  className,
  textValue,
  ...props
}) => {
  const checkIcon = useContext(SelectCheckIconContext);
  return (
    <AriaListBoxItem
      className={cn("ginga-select-item", className)}
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
