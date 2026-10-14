"use client";

import { cn } from "@ginga-ui/utils";

import { STATUS_ICONS } from "../../icons";
import "./index.css";

import type { StatusVariant } from "../../icons";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: StatusVariant;
  icon?: React.ReactNode;
};

export const Alert: React.FC<AlertProps> = ({
  className,
  variant = "info",
  icon,
  children,
  ...props
}) => {
  const DefaultIcon = STATUS_ICONS[variant];
  return (
    <div
      className={cn("ginga-alert", className)}
      data-variant={variant}
      {...props}
    >
      {icon !== null && (
        <span className="ginga-alert-icon" aria-hidden="true">
          {icon ?? <DefaultIcon />}
        </span>
      )}
      <div className="ginga-alert-body">{children}</div>
    </div>
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
