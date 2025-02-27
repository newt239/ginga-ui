"use client";

import { cn } from "@ginga-ui/utils";
import { Link as AriaLink } from "react-aria-components";

import styles from "./anchor.module.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type AnchorProps = OmitStrict<
  React.ComponentProps<typeof AriaLink>,
  "isDisabled"
> & {
  disabled?: boolean;
};

export const Anchor: React.FC<AnchorProps> = ({
  disabled,
  className,
  ...props
}) => {
  return (
    <AriaLink
      isDisabled={disabled}
      className={cn(styles.anchor, className)}
      {...props}
    />
  );
};
