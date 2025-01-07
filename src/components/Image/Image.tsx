import React from "react";

import styles from "./Image.module.css";

import { cn } from "@/lib/utils";

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  variant?: "default" | "avatar";
};

const Image = ({ className, variant = "default", ...props }: ImageProps) => {
  return (
    <img
      className={cn(styles.image, className)}
      data-variant={variant}
      {...props}
    />
  );
};

export default Image;
