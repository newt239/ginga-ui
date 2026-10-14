"use client";

import { createContext, useContext } from "react";

import { cn } from "@ginga-ui/utils";
import {
  Dialog as AriaDialog,
  Heading as AriaHeading,
} from "react-aria-components";

import { STATUS_ICONS } from "../../icons";
import "./index.css";

import type { StatusVariant } from "../../icons";
import type { OmitStrict } from "@ginga-ui/utils";

export type AlertDialogProps = OmitStrict<
  React.ComponentProps<typeof AriaDialog>,
  "role"
> & {
  variant?: StatusVariant;
};

const AlertDialogVariantContext = createContext<StatusVariant | undefined>(
  undefined
);

export const AlertDialog: React.FC<AlertDialogProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <AlertDialogVariantContext.Provider value={variant}>
      <AriaDialog
        role="alertdialog"
        className={cn("ginga-alert-dialog", className)}
        data-variant={variant}
        {...props}
      >
        {children}
      </AriaDialog>
    </AlertDialogVariantContext.Provider>
  );
};

export type AlertDialogTitleProps = React.ComponentProps<typeof AriaHeading>;

export const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  children,
  className,
  ...props
}) => {
  const variant = useContext(AlertDialogVariantContext);
  const Icon = variant ? STATUS_ICONS[variant] : null;
  return (
    <AriaHeading
      slot="title"
      className={cn("ginga-alert-dialog-title", className)}
      {...props}
    >
      {Icon && <Icon className="ginga-alert-dialog-icon" />}
      {children}
    </AriaHeading>
  );
};
