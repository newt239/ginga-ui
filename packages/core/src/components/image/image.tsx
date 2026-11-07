"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type ImageProps = OmitStrict<React.ComponentProps<"img">, "alt"> & {
  alt: string;
  variant?: "default" | "avatar";
};

export const Image: React.FC<ImageProps> = ({
  className,
  variant = "default",
  alt,
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
