import React, { ComponentProps } from "react";

import { Link as AriaLink } from "react-aria-components";

import styles from "./Link.module.css";

import { cn } from "@/lib/utils";

export type LinkProps = ComponentProps<typeof AriaLink>;

const Link: React.FC<LinkProps> = ({ className, ...props }) => {
  return <AriaLink className={cn(styles["link"], className)} {...props} />;
};

export default Link;
