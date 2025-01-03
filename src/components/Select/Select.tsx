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

export type SelectProps = ComponentProps<typeof AriaSelect>;

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <AriaSelect className={cn(styles.select, className)} ref={ref} {...props}>
        {children}
      </AriaSelect>
    );
  }
);
Select.displayName = "Select";

export type ButtonProps = ComponentProps<typeof Button>;

const SelectButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button
        className={cn(styles["select-button"], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
SelectButton.displayName = "SelectButton";

export type PopoverProps = ComponentProps<typeof Popover>;

const SelectPopover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Popover
        className={cn(styles["select-popover"], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Popover>
    );
  }
);
SelectPopover.displayName = "SelectPopover";

export type ListBoxProps = ComponentProps<typeof ListBox>;

const SelectListBox = React.forwardRef<HTMLDivElement, ListBoxProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ListBox
        className={cn(styles["select-listbox"], className)}
        ref={ref}
        {...props}
      >
        {children}
      </ListBox>
    );
  }
);
SelectListBox.displayName = "SelectListBox";

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

export type LabelProps = ComponentProps<typeof AriaLabel>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <AriaLabel className={cn(styles.label, className)} ref={ref} {...props}>
        {children}
      </AriaLabel>
    );
  }
);
Label.displayName = "Label";

export { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue };
