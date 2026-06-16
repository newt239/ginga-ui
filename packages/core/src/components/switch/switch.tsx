"use client";

import { cn } from "@ginga-ui/utils";
import { Switch as AriaSwitch } from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type SwitchProps = OmitStrict<
  React.ComponentProps<typeof AriaSwitch>,
  "isDisabled" | "isSelected"
> & {
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
};

export const Switch: React.FC<SwitchProps> = ({
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
      className={cn("ginga-switch", className)}
      {...props}
    >
      <div className={"ginga-switch-indicator"} />
      {children}
    </AriaSwitch>
  );
};
