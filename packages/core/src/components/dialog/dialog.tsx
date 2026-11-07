"use client";

import { cn } from "@ginga-ui/utils";
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  composeRenderProps,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type DialogTriggerProps = React.ComponentProps<typeof AriaDialogTrigger>;

export const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  ...props
}) => {
  return <AriaDialogTrigger {...props}>{children}</AriaDialogTrigger>;
};

export type ModalProps = OmitStrict<
  React.ComponentProps<typeof AriaModalOverlay>,
  "isDismissable"
> & {
  dismissable?: boolean;
  overlayClassName?: string;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  style,
  ref,
  render,
  dismissable,
  overlayClassName,
  ...props
}) => {
  return (
    <AriaModalOverlay
      className={cn("ginga-modal-overlay", overlayClassName)}
      isDismissable={dismissable}
      {...props}
    >
      <AriaModal
        ref={ref}
        className={composeRenderProps(className, (c) => cn("ginga-modal", c))}
        style={style}
        render={render}
      >
        {children}
      </AriaModal>
    </AriaModalOverlay>
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
