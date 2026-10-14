"use client";

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

import { CheckIcon, ChevronDownIcon } from "../../icons";
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
};

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  label,
  disabled,
  required,
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
        <ChevronDownIcon className="ginga-select-icon" />
      </AriaButton>
      <AriaPopover className="ginga-select-popover">
        <AriaListBox className="ginga-select-listbox">{children}</AriaListBox>
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
          {renderProps.isSelected && (
            <CheckIcon className="ginga-select-item-check" />
          )}
        </>
      )}
    </AriaListBoxItem>
  );
};

SelectItem.displayName = "SelectItem";
