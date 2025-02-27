"use client";

import { Radio as AriaRadio } from "react-aria-components";

import styles from "./Radio.module.css";

import type { OmitStrict } from "@ginga-ui/utils";

import { cn } from "@ginga-ui/utils";

export type RadioProps = OmitStrict<
  React.ComponentProps<typeof AriaRadio>,
  "isDisabled"
> & {
  disabled?: boolean;
};

export const Radio: React.FC<RadioProps> = ({
  children,
  disabled,
  className,
  ...props
}) => {
  return (
    <AriaRadio
      isDisabled={disabled}
      className={cn(styles.radio, className)}
      {...props}
    >
      {children}
    </AriaRadio>
  );
};