"use client";

import { cn } from "@ginga-ui/utils";
import { useLocale, VisuallyHidden } from "react-aria";
import {
  Button as AriaButton,
  composeRenderProps,
  Disclosure,
  DisclosurePanel,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type TraceProps = React.ComponentProps<"div">;

export const Trace: React.FC<TraceProps> = ({ className, ...props }) => (
  <div className={cn("ginga-trace", className)} {...props} />
);

export type TraceStatus = "complete" | "running" | "error" | "pending";

const STATUS_LABELS: Record<"ja" | "en", Record<TraceStatus, string>> = {
  ja: {
    complete: "完了",
    running: "実行中",
    error: "エラー",
    pending: "待機中",
  },
  en: {
    complete: "Complete",
    running: "Running",
    error: "Error",
    pending: "Pending",
  },
};

export type TraceLineProps = React.ComponentProps<"span"> & {
  status?: TraceStatus;
  statusLabel?: string;
};

export const TraceLine: React.FC<TraceLineProps> = ({
  status,
  statusLabel,
  className,
  children,
  ...props
}) => {
  const { locale } = useLocale();
  const labels = STATUS_LABELS[locale.startsWith("ja") ? "ja" : "en"];
  const label = statusLabel ?? (status ? labels[status] : undefined);
  return (
    <span
      data-status={status}
      className={cn("ginga-trace-line", className)}
      {...props}
    >
      {label && <VisuallyHidden>{`${label} `}</VisuallyHidden>}
      {children}
    </span>
  );
};

export type TraceIconProps = React.ComponentProps<"span">;

export const TraceIcon: React.FC<TraceIconProps> = ({
  className,
  ...props
}) => (
  <span
    aria-hidden="true"
    className={cn("ginga-trace-icon", className)}
    {...props}
  />
);

export type TraceTitleProps = React.ComponentProps<"span">;

export const TraceTitle: React.FC<TraceTitleProps> = ({
  className,
  ...props
}) => <span className={cn("ginga-trace-title", className)} {...props} />;

export type TraceDescriptionProps = React.ComponentProps<"span">;

export const TraceDescription: React.FC<TraceDescriptionProps> = ({
  className,
  ...props
}) => <span className={cn("ginga-trace-description", className)} {...props} />;

export type TraceCollapsibleProps = OmitStrict<
  React.ComponentProps<typeof Disclosure>,
  "isExpanded" | "isDisabled"
> & {
  expanded?: boolean;
  disabled?: boolean;
};

export const TraceCollapsible: React.FC<TraceCollapsibleProps> = ({
  expanded,
  disabled,
  className,
  ...props
}) => (
  <Disclosure
    isExpanded={expanded}
    isDisabled={disabled}
    className={composeRenderProps(className, (c) =>
      cn("ginga-trace-collapsible", c)
    )}
    {...props}
  />
);

export type TraceCollapsibleTriggerProps = OmitStrict<
  React.ComponentProps<typeof AriaButton>,
  "isDisabled"
> & {
  icon?: React.ReactNode;
  disabled?: boolean;
};

export const TraceCollapsibleTrigger: React.FC<
  TraceCollapsibleTriggerProps
> = ({ icon, disabled, className, children, ...props }) => (
  <AriaButton
    slot="trigger"
    isDisabled={disabled}
    className={composeRenderProps(className, (c) =>
      cn("ginga-trace-trigger", c)
    )}
    {...props}
  >
    {composeRenderProps(children, (resolvedChildren) => (
      <>
        {resolvedChildren}
        {icon && (
          <span className="ginga-trace-chevron" aria-hidden="true">
            {icon}
          </span>
        )}
      </>
    ))}
  </AriaButton>
);

export type TraceCollapsibleContentProps = React.ComponentProps<
  typeof DisclosurePanel
>;

export const TraceCollapsibleContent: React.FC<
  TraceCollapsibleContentProps
> = ({ className, children, ...props }) => (
  <DisclosurePanel
    className={composeRenderProps(className, (c) =>
      cn("ginga-trace-content", c)
    )}
    {...props}
  >
    <div className="ginga-trace-content-inner">{children}</div>
  </DisclosurePanel>
);
