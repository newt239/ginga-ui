"use client";

import { Switch as AriaSwitch } from "react-aria-components";

import styles from "./Switch.module.css";

import type { OmitStrict } from "@/lib/types";

import { cn } from "@/lib/utils";

export type SwitchProps = OmitStrict<
  React.ComponentProps<typeof AriaSwitch>,
  "isDisabled" | "isSelected"
> & {
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
};

const Switch: React.FC<SwitchProps> = ({
  children,
  disabled,
  selected,
  className,
  ...props
}) => {
  return (
    <AriaSwitch
      isDisabled={disabled}
      isSelected={selected}
      className={cn(styles.switch, className)}
      {...props}
    >
      <div className={styles["switch-indicator"]} />
      {children}
    </AriaSwitch>
  );
};

export default Switch;
