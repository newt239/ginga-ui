"use client";

import { cn } from "@ginga-ui/utils";
import {
  Button as AriaButton,
  Disclosure,
  DisclosurePanel,
} from "react-aria-components";
import "./index.css";

export type TraceProps = React.HTMLAttributes<HTMLDivElement>;

export const Trace: React.FC<TraceProps> = ({ className, ...props }) => (
  <div className={cn("ginga-trace", className)} {...props} />
);

export type TraceStatus = "running" | "error" | "pending";

export type TraceLineProps = React.HTMLAttributes<HTMLSpanElement> & {
  status?: TraceStatus;
};

export const TraceLine: React.FC<TraceLineProps> = ({
  status,
  className,
  ...props
}) => (
  <span
    data-status={status}
    className={cn("ginga-trace-line", className)}
    {...props}
  />
);

export type TraceIconProps = React.HTMLAttributes<HTMLSpanElement>;

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

export type TraceTitleProps = React.HTMLAttributes<HTMLSpanElement>;

export const TraceTitle: React.FC<TraceTitleProps> = ({
  className,
  ...props
}) => <span className={cn("ginga-trace-title", className)} {...props} />;

export type TraceDescriptionProps = React.HTMLAttributes<HTMLSpanElement>;

export const TraceDescription: React.FC<TraceDescriptionProps> = ({
  className,
  ...props
}) => <span className={cn("ginga-trace-description", className)} {...props} />;

export type TraceCollapsibleProps = React.ComponentProps<typeof Disclosure>;

export const TraceCollapsible: React.FC<TraceCollapsibleProps> = ({
  className,
  ...props
}) => (
  <Disclosure className={cn("ginga-trace-collapsible", className)} {...props} />
);

export type TraceCollapsibleTriggerProps = React.ComponentProps<
  typeof AriaButton
> & {
  icon?: React.ReactNode;
};

export const TraceCollapsibleTrigger: React.FC<
  TraceCollapsibleTriggerProps
> = ({ icon, className, children, ...props }) => (
  <AriaButton
    slot="trigger"
    className={cn("ginga-trace-trigger", className)}
    {...props}
  >
    {(renderProps) => (
      <>
        {typeof children === "function" ? children(renderProps) : children}
        {icon && (
          <span className="ginga-trace-chevron" aria-hidden="true">
            {icon}
          </span>
        )}
      </>
    )}
  </AriaButton>
);

export type TraceCollapsibleContentProps = React.ComponentProps<
  typeof DisclosurePanel
>;

export const TraceCollapsibleContent: React.FC<
  TraceCollapsibleContentProps
> = ({ className, children, ...props }) => (
  <DisclosurePanel className={cn("ginga-trace-content", className)} {...props}>
    <div className="ginga-trace-content-inner">{children}</div>
  </DisclosurePanel>
);
