"use client";

import { Radio as AriaRadio } from "react-aria-components";

import styles from "./Radio.module.css";

import type { OmitStrict } from "@/lib/types";

import { cn } from "@/lib/utils";

export type RadioProps = OmitStrict<
  React.ComponentProps<typeof AriaRadio>,
  "isDisabled"
> & {
  disabled?: boolean;
};

const Radio: React.FC<RadioProps> = ({
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

export default Radio;
