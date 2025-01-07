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

import { cn } from "@/lib/utils";

export type SelectProps = React.ComponentProps<typeof AriaSelect> & {
  label: string;
};

const Select = ({ children, className, label, ...props }: SelectProps) => {
  return (
    <AriaSelect className={cn(styles.select, className)} {...props}>
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

const SelectItem = ({ children, className, ...props }: ListBoxItemProps) => {
  return (
    <ListBoxItem className={cn(styles["select-item"], className)} {...props}>
      {children}
    </ListBoxItem>
  );
};

SelectItem.displayName = "SelectItem";

export default Select;
