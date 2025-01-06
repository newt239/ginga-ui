"use client";

import { cn } from "@/lib/utils";
import React from "react";

import styles from "./Container.module.css";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <div
        className={cn(styles.container, className)}
        data-size={size}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Container;
