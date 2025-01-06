"use client";

import { ComponentProps } from "react";

import { Link as AriaLink } from "react-aria-components";

import styles from "./Anchor.module.css";

import { cn } from "@/lib/utils";

export type AnchorProps = ComponentProps<typeof AriaLink>;

const Anchor = ({ className, ...props }: AnchorProps) => {
  return <AriaLink className={cn(styles.anchor, className)} {...props} />;
};

export default Anchor;
