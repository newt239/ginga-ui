"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "info" | "success" | "warning" | "danger";
};

export const Alert: React.FC<AlertProps> = ({
  className,
  variant = "info",
  ...props
}) => {
  return (
    <div
      className={cn("ginga-alert", className)}
      data-variant={variant}
      {...props}
    />
  );
};

export type AlertTitleProps = React.HTMLAttributes<HTMLDivElement>;

export const AlertTitle: React.FC<AlertTitleProps> = ({
  className,
  ...props
}) => {
  return <div className={cn("ginga-alert-title", className)} {...props} />;
};

export type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const AlertDescription: React.FC<AlertDescriptionProps> = ({
  className,
  ...props
}) => {
  return <p className={cn("ginga-alert-description", className)} {...props} />;
};
