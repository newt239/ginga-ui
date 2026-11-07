"use client";

import { cn } from "@ginga-ui/utils";
import {
  composeRenderProps,
  Switch as AriaSwitch,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type SwitchProps = OmitStrict<
  React.ComponentProps<typeof AriaSwitch>,
  "isDisabled" | "isSelected" | "isReadOnly"
> & {
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  readOnly?: boolean;
};

export const Switch: React.FC<SwitchProps> = ({
  children,
  disabled,
  selected,
  readOnly,
  className,
  ...props
}) => {
  return (
    <AriaSwitch
      isDisabled={disabled}
      isSelected={selected}
      isReadOnly={readOnly}
      className={composeRenderProps(className, (c) => cn("ginga-switch", c))}
      {...props}
    >
      <span className="ginga-switch-indicator" />
      {children}
    </AriaSwitch>
  );
};
