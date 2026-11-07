"use client";

import { cn } from "@ginga-ui/utils";

import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";

export type StatusVariant = "info" | "success" | "warning" | "danger";

export type AlertProps = React.ComponentProps<"div"> &
  ElementRenderProps<"div"> & {
    variant?: StatusVariant;
    icon?: React.ReactNode;
  };

export const Alert: React.FC<AlertProps> = ({
  className,
  variant = "info",
  icon,
  children,
  render,
  ...props
}) =>
  renderElement("div", render, {
    className: cn("ginga-alert", className),
    "data-variant": variant,
    ...props,
    children: (
      <>
        {icon && (
          <span className="ginga-alert-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <div className="ginga-alert-body">{children}</div>
      </>
    ),
  });

export type AlertTitleProps = React.ComponentProps<"div"> &
  ElementRenderProps<"div">;

export const AlertTitle: React.FC<AlertTitleProps> = ({
  className,
  render,
  ...props
}) =>
  renderElement("div", render, {
    className: cn("ginga-alert-title", className),
    ...props,
  });

export type AlertDescriptionProps = React.ComponentProps<"p"> &
  ElementRenderProps<"p">;

export const AlertDescription: React.FC<AlertDescriptionProps> = ({
  className,
  render,
  ...props
}) =>
  renderElement("p", render, {
    className: cn("ginga-alert-description", className),
    ...props,
  });
