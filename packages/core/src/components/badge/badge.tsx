"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
};

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <span
      className={cn("ginga-badge", className)}
      data-variant={variant}
      {...props}
    />
  );
};
