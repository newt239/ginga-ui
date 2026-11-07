"use client";

import { cn } from "@ginga-ui/utils";
import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";

export type BadgeProps = React.ComponentProps<"span"> &
  ElementRenderProps<"span"> & {
    variant?:
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "danger";
  };

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  render,
  ...props
}) =>
  renderElement("span", render, {
    className: cn("ginga-badge", className),
    "data-variant": variant,
    ...props,
  });
