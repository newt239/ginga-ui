"use client";

import { cn } from "@ginga-ui/utils";
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Modal as AriaModal,
} from "react-aria-components";
import "./index.css";

export type DialogTriggerProps = React.ComponentProps<typeof AriaDialogTrigger>;

export const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  ...props
}) => {
  return <AriaDialogTrigger {...props}>{children}</AriaDialogTrigger>;
};

export type ModalProps = React.ComponentProps<typeof AriaModal>;

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaModal className={cn("ginga-modal", className)} {...props}>
      {children}
    </AriaModal>
  );
};

export type DialogProps = React.ComponentProps<typeof AriaDialog>;

export const Dialog: React.FC<DialogProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaDialog className={cn("ginga-dialog", className)} {...props}>
      {children}
    </AriaDialog>
  );
};

export type DialogTitleProps = React.ComponentProps<typeof AriaHeading>;

export const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaHeading
      slot="title"
      className={cn("ginga-dialog-title", className)}
      {...props}
    >
      {children}
    </AriaHeading>
  );
};
