import React, { ComponentProps } from "react";

import { RadioGroup as AriaRadioGroup } from "react-aria-components";

import styles from "./RadioGroup.module.css";

import { cn } from "@/lib/utils";

export type RadioGroupProps = ComponentProps<typeof AriaRadioGroup>;

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaRadioGroup className={cn(styles["radio-group"], className)} {...props}>
      {children}
    </AriaRadioGroup>
  );
};

export default RadioGroup;
