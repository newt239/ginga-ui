"use client";

import { cn } from "@ginga-ui/utils";
import { Radio as AriaRadio } from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

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
      className={cn("ginga-radio", className)}
      {...props}
    >
      {children}
    </AriaRadio>
  );
};
