"use client";

import styles from "./Container.module.css";

import { cn } from "@/lib/utils";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

const Container: React.FC<ContainerProps> = ({
  className,
  size = "md",
  ...props
}) => {
  return (
    <div
      className={cn(styles.container, className)}
      data-size={size}
      {...props}
    />
  );
};

export default Container;
