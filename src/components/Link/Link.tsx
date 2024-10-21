import React, { ComponentProps } from "react";
import { Link as AriaLink } from "react-aria-components";

import { cn } from "@/lib/utils";
import classes from "./Link.module.css";

export type LinkProps = ComponentProps<typeof AriaLink>;

const Link: React.FC<LinkProps> = ({ className, ...props }) => {
  return <AriaLink className={cn(classes.root, className)} {...props} />;
};

export default Link;
