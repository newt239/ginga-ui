import React, { ComponentProps } from "react";

import { Radio as AriaRadio } from "react-aria-components";

import styles from "./Radio.module.css";

import { cn } from "@/lib/utils";

export type RadioProps = ComponentProps<typeof AriaRadio>;

const Radio: React.FC<RadioProps> = ({ children, className, ...props }) => {
  return (
    <AriaRadio className={cn(styles.radio, className)} {...props}>
      {children}
    </AriaRadio>
  );
};

export default Radio;
