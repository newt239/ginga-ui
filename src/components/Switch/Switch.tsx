import React, { ComponentProps } from "react";

import { Switch as AriaSwitch } from "react-aria-components";

import styles from "./Switch.module.css";

import { cn } from "@/lib/utils";

export type SwitchProps = ComponentProps<typeof AriaSwitch>;

const Switch: React.FC<SwitchProps> = ({ children, className, ...props }) => {
  return (
    <AriaSwitch className={cn(styles.Switch, className)} {...props}>
      <>
        <div className={styles.SwitchIndicator} />
        {children}
      </>
    </AriaSwitch>
  );
};

export default Switch;
