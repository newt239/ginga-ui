"use client";

import { cn } from "@/lib/utils";
import React from "react";

import styles from "./Container.module.css";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

const Container = ({ className, size = "md", ...props }: ContainerProps) => {
  return (
    <div
      className={cn(styles.container, className)}
      data-size={size}
      {...props}
    />
  );
};

export default Container;
