"use client";

import { Link as AriaLink } from "react-aria-components";

import styles from "./Anchor.module.css";

import { cn } from "@/lib/utils";

export type AnchorProps = React.ComponentProps<typeof AriaLink>;

const Anchor = ({ className, ...props }: AnchorProps) => {
  return <AriaLink className={cn(styles.anchor, className)} {...props} />;
};

export default Anchor;
