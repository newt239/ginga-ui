"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  variant?: "default" | "avatar";
};

export const Image: React.FC<ImageProps> = ({
  className,
  variant = "default",
  alt = "",
  ...props
}) => {
  return (
    <img
      className={cn("ginga-image", className)}
      alt={alt}
      data-variant={variant}
      {...props}
    />
  );
};
