"use client";

import styles from "./Image.module.css";

import { cn } from "@ginga-ui/utils";

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  variant?: "default" | "avatar";
};

export const Image: React.FC<ImageProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  return (
    <img
      className={cn(styles.image, className)}
      data-variant={variant}
      {...props}
    />
  );
};