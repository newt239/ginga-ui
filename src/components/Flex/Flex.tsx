"use client";

import React from "react";

import styles from "./Flex.module.css";

import { cn } from "@/lib/utils";

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: number;
  grow?: number;
  shrink?: number;
  basis?: string;
};

const Flex = ({
  className,
  direction = "row",
  justify = "start",
  align = "stretch",
  wrap = "nowrap",
  gap = 0,
  grow = 0,
  shrink = 1,
  basis = "auto",
  ...props
}: FlexProps) => {
  return (
    <div
      className={cn(styles.flex, className)}
      data-direction={direction}
      data-justify={justify}
      data-align={align}
      data-wrap={wrap}
      data-gap={gap}
      data-grow={grow}
      data-shrink={shrink}
      data-basis={basis}
      {...props}
    />
  );
};

export default Flex;
