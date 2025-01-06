"use client";

import React, { type ComponentProps } from "react";
import {
  Label as AriaLabel,
  Select as AriaSelect,
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
} from "react-aria-components";

import { cn } from "@/lib/utils";

import styles from "./Select.module.css";

export type SelectProps = ComponentProps<typeof AriaSelect> & {
  label: string;
};

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ children, className, label, ...props }, ref) => {
    return (
      <AriaSelect className={cn(styles.select, className)} ref={ref} {...props}>
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
  }
);
Select.displayName = "Select";

export type ListBoxItemProps = ComponentProps<typeof ListBoxItem>;

const SelectItem = React.forwardRef<HTMLDivElement, ListBoxItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ListBoxItem
        className={cn(styles["select-item"], className)}
        ref={ref}
        {...props}
      >
        {children}
      </ListBoxItem>
    );
  }
);
SelectItem.displayName = "SelectItem";

export default Select;
