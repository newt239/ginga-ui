"use client";

import { useContext, useRef } from "react";

import { cn } from "@ginga-ui/utils";
import {
  FocusScope,
  Overlay,
  mergeProps,
  useOverlay,
  useOverlayPosition,
} from "react-aria";
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  OverlayTriggerStateContext,
  PopoverContext,
  useSlottedContext,
} from "react-aria-components";
import "./index.css";

import type { Placement } from "react-aria";

export type PopoverTriggerProps = React.ComponentProps<
  typeof AriaDialogTrigger
>;

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({
  children,
  ...props
}) => {
  return <AriaDialogTrigger {...props}>{children}</AriaDialogTrigger>;
};

export type PopoverProps = {
  children?: React.ReactNode;
  className?: string;
  placement?: Placement;
  offset?: number;
  crossOffset?: number;
  shouldFlip?: boolean;
  showArrow?: boolean;
};

const ARROW_SIZE = 12;

export const Popover: React.FC<PopoverProps> = (props) => {
  const state = useContext(OverlayTriggerStateContext);
  if (!state?.isOpen) return null;
  return <PopoverInner {...props} />;
};

const PopoverInner: React.FC<PopoverProps> = ({
  children,
  className,
  placement = "bottom",
  offset = 8,
  crossOffset,
  shouldFlip,
  showArrow = true,
}) => {
  const state = useContext(OverlayTriggerStateContext);
  const popoverContext = useSlottedContext(PopoverContext);
  const fallbackRef = useRef<HTMLElement>(null);
  const triggerRef = popoverContext?.triggerRef ?? fallbackRef;
  const popoverRef = useRef<HTMLDivElement>(null);

  const {
    overlayProps: positionProps,
    arrowProps,
    placement: actualPlacement,
  } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef: popoverRef,
    placement,
    offset: showArrow ? offset + ARROW_SIZE / 2 : offset,
    crossOffset,
    shouldFlip,
    arrowSize: showArrow ? ARROW_SIZE : 0,
    isOpen: state?.isOpen,
    onClose: null,
  });

  const { overlayProps } = useOverlay(
    {
      isOpen: state?.isOpen,
      onClose: () => state?.close(),
      isDismissable: true,
      shouldCloseOnInteractOutside: (element) =>
        !triggerRef.current?.contains(element),
    },
    popoverRef
  );

  const isVertical = actualPlacement === "top" || actualPlacement === "bottom";

  return (
    <Overlay>
      <FocusScope restoreFocus>
        <div
          ref={popoverRef}
          className={cn("ginga-popover", className)}
          data-placement={actualPlacement ?? undefined}
          {...mergeProps(overlayProps, positionProps)}
        >
          {showArrow && actualPlacement && (
            <div
              className="ginga-popover-arrow"
              data-placement={actualPlacement}
              {...arrowProps}
              style={{
                position: "absolute",
                [actualPlacement]: "calc(100% - var(--border-width))",
                transform: isVertical ? "translateX(-50%)" : "translateY(-50%)",
                ...arrowProps.style,
              }}
            >
              <svg
                width={ARROW_SIZE}
                height={ARROW_SIZE}
                viewBox="0 0 12 12"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M0 0 L6 6 L12 0" />
              </svg>
            </div>
          )}
          <AriaDialog className="ginga-popover-dialog">{children}</AriaDialog>
        </div>
      </FocusScope>
    </Overlay>
  );
};
