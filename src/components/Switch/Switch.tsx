import React, { ComponentProps } from "react";

import { Switch as AriaSwitch } from "react-aria-components";

import classes from "./Switch.module.css";

import { cn } from "@/lib/utils";

export type SwitchProps = ComponentProps<typeof AriaSwitch>;

const Switch: React.FC<SwitchProps> = ({ children, className, ...props }) => {
  return (
    <AriaSwitch className={cn(classes.root, className)} {...props}>
      <>
        <div className={classes.indicator} />
        {children}
      </>
    </AriaSwitch>
  );
};

export default Switch;
