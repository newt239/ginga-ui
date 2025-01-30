"use client";

import { Link as AriaLink } from "react-aria-components";

import styles from "./Anchor.module.css";

import type { OmitStrict } from "@/lib/types";

import { cn } from "@/lib/utils";

export type AnchorProps = OmitStrict<
  React.ComponentProps<typeof AriaLink>,
  "isDisabled"
> & {
  disabled?: boolean;
};

const Anchor: React.FC<AnchorProps> = ({ disabled, className, ...props }) => {
  return (
    <AriaLink
      isDisabled={disabled}
      className={cn(styles.anchor, className)}
      {...props}
    />
  );
};

export default Anchor;
