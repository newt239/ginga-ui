import { cn } from "@/lib/utils";
import React from "react";

import styles from "./Image.module.css";

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  variant?: "default" | "avatar";
};

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <img
        className={cn(styles["image"], className)}
        ref={ref}
        data-variant={variant}
        {...props}
      />
    );
  }
);

export default Image;
