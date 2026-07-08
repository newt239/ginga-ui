"use client";

import { cn } from "@ginga-ui/utils";
import {
  Dialog as AriaDialog,
  Heading as AriaHeading,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type DrawerProps = OmitStrict<
  React.ComponentProps<typeof AriaModalOverlay>,
  "isDismissable"
> & {
  placement?: "left" | "right" | "top" | "bottom";
  dismissable?: boolean;
};

export const Drawer: React.FC<DrawerProps> = ({
  children,
  className,
  placement = "right",
  dismissable = true,
  ...props
}) => {
  return (
    <AriaModalOverlay
      className={cn("ginga-drawer-overlay", className)}
      isDismissable={dismissable}
      data-placement={placement}
      {...props}
    >
      <AriaModal className="ginga-drawer">{children}</AriaModal>
    </AriaModalOverlay>
  );
};

export type DrawerContentProps = React.ComponentProps<typeof AriaDialog>;

export const DrawerContent: React.FC<DrawerContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaDialog className={cn("ginga-drawer-content", className)} {...props}>
      {children}
    </AriaDialog>
  );
};

export type DrawerTitleProps = React.ComponentProps<typeof AriaHeading>;

export const DrawerTitle: React.FC<DrawerTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaHeading
      slot="title"
      className={cn("ginga-drawer-title", className)}
      {...props}
    >
      {children}
    </AriaHeading>
  );
};
