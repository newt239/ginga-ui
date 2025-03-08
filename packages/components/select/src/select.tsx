"use client";

import { cn } from "@ginga-ui/utils";
import {
  Label as AriaLabel,
  Select as AriaSelect,
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type SelectProps = OmitStrict<
  React.ComponentProps<typeof AriaSelect>,
  "isDisabled" | "isRequired"
> & {
  label: string;
  disabled?: boolean;
  required?: boolean;
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
      <AriaLabel className={cn("ginga-label", className)}>{label}</AriaLabel>
      <Button className={cn("ginga-select-button", className)}>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover className={cn("ginga-select-popover", className)}>
        <ListBox className={cn("ginga-select-listbox", className)}>
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
};

Select.displayName = "Select";

export type ListBoxItemProps = React.ComponentProps<typeof ListBoxItem>;

const SelectItem: React.FC<ListBoxItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ListBoxItem className={cn("ginga-select-item", className)} {...props}>
      {children}
    </ListBoxItem>
  );
};

SelectItem.displayName = "SelectItem";
