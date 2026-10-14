"use client";

import { useContext, useEffect, useRef } from "react";

import { cn } from "@ginga-ui/utils";
import { FocusScope, Overlay, useOverlay } from "react-aria";
import {
  Dialog as AriaDialog,
  Heading as AriaHeading,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  OverlayTriggerStateContext,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type DrawerPlacement = "left" | "right" | "top" | "bottom";

export type DrawerProps = OmitStrict<
  React.ComponentProps<typeof AriaModalOverlay>,
  "isDismissable"
> & {
  placement?: DrawerPlacement;
  dismissable?: boolean;
};

export const Drawer: React.FC<DrawerProps> = ({
  children,
  className,
  placement = "right",
  dismissable = true,
  ...props
}) => {
  if (!dismissable) {
    return (
      <NonModalDrawer
        className={typeof className === "string" ? className : undefined}
        placement={placement}
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
      >
        {typeof children === "function" ? null : children}
      </NonModalDrawer>
    );
  }

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

type NonModalDrawerProps = {
  children?: React.ReactNode;
  className?: string;
  placement: DrawerPlacement;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

const NonModalDrawer: React.FC<NonModalDrawerProps> = ({
  isOpen,
  onOpenChange,
  ...props
}) => {
  const state = useContext(OverlayTriggerStateContext);
  const open = isOpen ?? state?.isOpen ?? false;
  const close = () => (onOpenChange ? onOpenChange(false) : state?.close());

  if (!open) return null;
  return <NonModalDrawerInner {...props} onClose={close} />;
};

const NonModalDrawerInner: React.FC<
  OmitStrict<NonModalDrawerProps, "isOpen" | "onOpenChange"> & {
    onClose: () => void;
  }
> = ({ children, className, placement, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const { overlayProps } = useOverlay(
    { isOpen: true, onClose, isDismissable: false },
    drawerRef
  );

  useEffect(() => {
    const root = document.documentElement;
    const { width, height } = document.body.getBoundingClientRect();
    root.style.setProperty("--ginga-drawer-page-width", `${width}px`);
    root.style.setProperty("--ginga-drawer-page-height", `${height}px`);
    root.dataset.gingaDrawerInset = placement;
    return () => {
      delete root.dataset.gingaDrawerInset;
      root.style.removeProperty("--ginga-drawer-page-width");
      root.style.removeProperty("--ginga-drawer-page-height");
    };
  }, [placement]);

  return (
    <Overlay>
      <div
        className={cn("ginga-drawer-overlay", className)}
        data-placement={placement}
        data-non-modal
      >
        <FocusScope restoreFocus>
          <div ref={drawerRef} className="ginga-drawer" {...overlayProps}>
            {children}
          </div>
        </FocusScope>
      </div>
    </Overlay>
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
