import React, { ComponentProps } from "react";

import { Link as AriaLink } from "react-aria-components";

import styles from "./Link.module.css";

import { cn } from "@/lib/utils";

export type AnchorProps = ComponentProps<typeof AriaLink>;

const Anchor: React.FC<AnchorProps> = ({ className, ...props }) => {
  return <AriaLink className={cn(styles["link"], className)} {...props} />;
};

export default Anchor;
