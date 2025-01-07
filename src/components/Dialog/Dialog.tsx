"use client";

import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Modal as AriaModal,
} from "react-aria-components";

import styles from "./Dialog.module.css";

import { cn } from "@/lib/utils";

export type DialogTriggerProps = React.ComponentProps<typeof AriaDialogTrigger>;

const DialogTrigger = ({ children, ...props }: DialogTriggerProps) => {
  return <AriaDialogTrigger {...props}>{children}</AriaDialogTrigger>;
};

export type ModalProps = React.ComponentProps<typeof AriaModal>;

const Modal = ({ children, className, ...props }: ModalProps) => {
  return (
    <AriaModal className={cn(styles.modal, className)} {...props}>
      {children}
    </AriaModal>
  );
};

export type DialogProps = React.ComponentProps<typeof AriaDialog>;

const Dialog = ({ children, className, ...props }: DialogProps) => {
  return (
    <AriaDialog className={cn(styles.dialog, className)} {...props}>
      {children}
    </AriaDialog>
  );
};

export type DialogTitleProps = React.ComponentProps<typeof AriaHeading>;

const DialogTitle = ({ children, className, ...props }: DialogTitleProps) => {
  return (
    <AriaHeading
      slot="title"
      className={cn(styles["dialog-title"], className)}
      {...props}
    >
      {children}
    </AriaHeading>
  );
};

export { Dialog, DialogTitle, DialogTrigger, Modal };
