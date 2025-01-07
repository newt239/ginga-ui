"use client";

import styles from "./Container.module.css";

import { cn } from "@/lib/utils";

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
