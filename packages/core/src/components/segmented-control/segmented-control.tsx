"use client";

import { cn } from "@ginga-ui/utils";
import {
  ToggleButton as AriaToggleButton,
  ToggleButtonGroup as AriaToggleButtonGroup,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type SegmentedControlSize = "sm" | "md";

export type SegmentedControlProps = OmitStrict<
  React.ComponentProps<typeof AriaToggleButtonGroup>,
  | "selectionMode"
  | "disallowEmptySelection"
  | "selectedKeys"
  | "defaultSelectedKeys"
  | "onSelectionChange"
  | "isDisabled"
> & {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: SegmentedControlSize;
};

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  value,
  defaultValue,
  onChange,
  disabled,
  size = "md",
  className,
  ...props
}) => {
  return (
    <AriaToggleButtonGroup
      selectionMode="single"
      disallowEmptySelection
      selectedKeys={value === undefined ? undefined : [value]}
      defaultSelectedKeys={
        defaultValue === undefined ? undefined : [defaultValue]
      }
      onSelectionChange={(keys) => {
        const [key] = keys;
        if (key !== undefined) onChange?.(String(key));
      }}
      isDisabled={disabled}
      data-size={size}
      className={cn("ginga-segmented-control", className)}
      {...props}
    />
  );
};

export type SegmentedControlItemProps = OmitStrict<
  React.ComponentProps<typeof AriaToggleButton>,
  "id" | "isDisabled"
> & {
  id: string;
  disabled?: boolean;
};

export const SegmentedControlItem: React.FC<SegmentedControlItemProps> = ({
  disabled,
  className,
  ...props
}) => {
  return (
    <AriaToggleButton
      isDisabled={disabled}
      className={cn("ginga-segmented-control-item", className)}
      {...props}
    />
  );
};
