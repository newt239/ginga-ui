"use client";

import { cn } from "@ginga-ui/utils";
import { RadioGroup as AriaRadioGroup } from "react-aria-components";

import styles from "./radio-group.module.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type RadioGroupProps = OmitStrict<
  React.ComponentProps<typeof AriaRadioGroup>,
  "isDisabled" | "isRequired"
> & {
  disabled?: boolean;
  required?: boolean;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  disabled,
  required,
  className,
  ...props
}) => {
  return (
    <AriaRadioGroup
      isDisabled={disabled}
      isRequired={required}
      className={cn(styles["radio-group"], className)}
      {...props}
    >
      {children}
    </AriaRadioGroup>
  );
};
