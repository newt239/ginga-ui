"use client";

import { cn } from "@ginga-ui/utils";
import {
  Dialog as AriaDialog,
  Heading as AriaHeading,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type AlertDialogProps = OmitStrict<
  React.ComponentProps<typeof AriaDialog>,
  "role"
> & {
  variant?: "info" | "success" | "warning" | "danger";
};

export const AlertDialog: React.FC<AlertDialogProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <AriaDialog
      role="alertdialog"
      className={cn("ginga-alert-dialog", className)}
      data-variant={variant}
      {...props}
    >
      {children}
    </AriaDialog>
  );
};

export type AlertDialogTitleProps = React.ComponentProps<typeof AriaHeading>;

export const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaHeading
      slot="title"
      className={cn("ginga-alert-dialog-title", className)}
      {...props}
    >
      {children}
    </AriaHeading>
  );
};
