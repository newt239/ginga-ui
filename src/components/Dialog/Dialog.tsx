"use client";

import React, { type ComponentProps } from "react";
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Modal as AriaModal,
} from "react-aria-components";

import { cn } from "@/lib/utils";

import styles from "./Dialog.module.css";

export type DialogTriggerProps = ComponentProps<typeof AriaDialogTrigger>;

const DialogTrigger = React.forwardRef<HTMLDivElement, DialogTriggerProps>(
  ({ children, ...props }) => {
    return <AriaDialogTrigger {...props}>{children}</AriaDialogTrigger>;
  }
);
DialogTrigger.displayName = "DialogTrigger";

export type ModalProps = ComponentProps<typeof AriaModal>;

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <AriaModal className={cn(styles.modal, className)} ref={ref} {...props}>
        {children}
      </AriaModal>
    );
  }
);
Modal.displayName = "Modal";

export type DialogProps = ComponentProps<typeof AriaDialog>;

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <AriaDialog className={cn(styles.dialog, className)} ref={ref} {...props}>
        {children}
      </AriaDialog>
    );
  }
);
Dialog.displayName = "Dialog";

export type DialogTitleProps = ComponentProps<typeof AriaHeading>;

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <AriaHeading
        slot="title"
        className={cn(styles["dialog-title"], className)}
        ref={ref}
        {...props}
      >
        {children}
      </AriaHeading>
    );
  }
);
DialogTitle.displayName = "DialogTitle";

export { Dialog, DialogTitle, DialogTrigger, Modal };
