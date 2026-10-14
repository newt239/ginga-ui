"use client";

import { cn } from "@ginga-ui/utils";
import {
  Button as AriaButton,
  Text as AriaText,
  UNSTABLE_Toast as AriaToast,
  UNSTABLE_ToastContent as AriaToastContent,
  UNSTABLE_ToastQueue as AriaToastQueue,
  UNSTABLE_ToastRegion as AriaToastRegion,
} from "react-aria-components";

import "./index.css";

import type { StatusVariant } from "../alert";
import type { OmitStrict } from "@ginga-ui/utils";
import type { ToastRegionProps as AriaToastRegionProps } from "react-aria-components";

export type ToastVariant = StatusVariant;

export type ToastContentValue = {
  title: string;
  description?: string;
  variant?: ToastVariant;
  icon?: React.ReactNode;
};

export type ToastOptions = {
  description?: string;
  icon?: React.ReactNode;
  timeout?: number;
  onClose?: () => void;
};

const defaultQueue = new AriaToastQueue<ToastContentValue>({
  maxVisibleToasts: 5,
});

const show = (
  title: string,
  options: ToastOptions & { variant?: ToastVariant } = {}
): string => {
  const { description, icon, variant, timeout, onClose } = options;
  return defaultQueue.add(
    { title, description, icon, variant },
    {
      timeout,
      onClose,
    }
  );
};

export const toast = {
  show,
  info: (title: string, options: ToastOptions = {}): string =>
    show(title, { ...options, variant: "info" }),
  success: (title: string, options: ToastOptions = {}): string =>
    show(title, { ...options, variant: "success" }),
  warning: (title: string, options: ToastOptions = {}): string =>
    show(title, { ...options, variant: "warning" }),
  danger: (title: string, options: ToastOptions = {}): string =>
    show(title, { ...options, variant: "danger" }),
  close: (key: string): void => defaultQueue.close(key),
};

export type ToastRegionProps = OmitStrict<
  AriaToastRegionProps<ToastContentValue>,
  "queue" | "children"
> & {
  queue?: AriaToastQueue<ToastContentValue>;
  placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  closeIcon?: React.ReactNode;
  closeLabel?: string;
};

export const ToastRegion: React.FC<ToastRegionProps> = ({
  className,
  queue = defaultQueue,
  placement = "bottom-right",
  closeIcon,
  closeLabel = "閉じる",
  ...props
}) => {
  return (
    <AriaToastRegion
      queue={queue}
      className={cn("ginga-toast-region", className)}
      data-placement={placement}
      {...props}
    >
      {({ toast: queuedToast }) => {
        const variant = queuedToast.content.variant ?? "info";
        const { icon } = queuedToast.content;
        return (
          <AriaToast
            toast={queuedToast}
            className="ginga-toast"
            data-variant={variant}
          >
            {icon && (
              <span className="ginga-toast-icon" aria-hidden="true">
                {icon}
              </span>
            )}
            <AriaToastContent className="ginga-toast-content">
              <AriaText slot="title" className="ginga-toast-title">
                {queuedToast.content.title}
              </AriaText>
              {queuedToast.content.description && (
                <AriaText
                  slot="description"
                  className="ginga-toast-description"
                >
                  {queuedToast.content.description}
                </AriaText>
              )}
            </AriaToastContent>
            <AriaButton
              slot="close"
              className="ginga-toast-close"
              aria-label={closeLabel}
            >
              {closeIcon ?? (
                <span className="ginga-toast-close-mark" aria-hidden="true" />
              )}
            </AriaButton>
          </AriaToast>
        );
      }}
    </AriaToastRegion>
  );
};
