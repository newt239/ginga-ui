"use client";

import { cn } from "@ginga-ui/utils";
import {
  composeRenderProps,
  ToggleButton as AriaToggleButton,
  ToggleButtonGroup as AriaToggleButtonGroup,
} from "react-aria-components";
import { useCallback } from "react";
import { setRef } from "../../lib/set-ref";
import { observeSelectionIndicator } from "./observe-selection-indicator";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type SegmentedControlSize = "sm" | "md" | "lg";

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
  ref,
  ...props
}) => {
  const mergedRef = useCallback(
    (node: HTMLDivElement) => {
      const stopObserving = observeSelectionIndicator(node);
      const cleanupRef = setRef(ref, node);
      return () => {
        stopObserving();
        cleanupRef();
      };
    },
    [ref]
  );

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
      ref={mergedRef}
      className={composeRenderProps(className, (c) =>
        cn("ginga-segmented-control", c)
      )}
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
      className={composeRenderProps(className, (c) =>
        cn("ginga-segmented-control-item", c)
      )}
      {...props}
    />
  );
};
