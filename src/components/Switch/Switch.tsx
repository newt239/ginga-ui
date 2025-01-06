"use client";

import React, { ComponentProps } from "react";

import { Switch as AriaSwitch } from "react-aria-components";

import styles from "./Switch.module.css";

import { cn } from "@/lib/utils";

export type SwitchProps = ComponentProps<typeof AriaSwitch> & {
  children: React.ReactNode;
};

const Switch: React.FC<SwitchProps> = ({ children, className, ...props }) => {
  return (
    <AriaSwitch className={cn(styles.switch, className)} {...props}>
      <div className={styles["switch-indicator"]} />
      {children}
    </AriaSwitch>
  );
};

export default Switch;
