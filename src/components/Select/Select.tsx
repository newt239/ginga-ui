"use client";

import {
  Label as AriaLabel,
  Select as AriaSelect,
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
} from "react-aria-components";

import styles from "./Select.module.css";

import type { OmitStrict } from "@/lib/types";

import { cn } from "@/lib/utils";

export type SelectProps = OmitStrict<
  React.ComponentProps<typeof AriaSelect>,
  "isDisabled" | "isRequired"
> & {
  label: string;
  disabled?: boolean;
  required?: boolean;
};

const Select: React.FC<SelectProps> = ({
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
      className={cn(styles.select, className)}
      {...props}
    >
      <AriaLabel className={cn(styles.label, className)}>{label}</AriaLabel>
      <Button className={cn(styles["select-button"], className)}>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover className={cn(styles["select-popover"], className)}>
        <ListBox className={cn(styles["select-listbox"], className)}>
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
    <ListBoxItem className={cn(styles["select-item"], className)} {...props}>
      {children}
    </ListBoxItem>
  );
};

SelectItem.displayName = "SelectItem";

export default Select;
