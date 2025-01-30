"use client";

import { RadioGroup as AriaRadioGroup } from "react-aria-components";

import styles from "./RadioGroup.module.css";

import type { OmitStrict } from "@/lib/types";

import { cn } from "@/lib/utils";

export type RadioGroupProps = OmitStrict<
  React.ComponentProps<typeof AriaRadioGroup>,
  "isDisabled" | "isRequired"
> & {
  disabled?: boolean;
  required?: boolean;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
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

export default RadioGroup;
