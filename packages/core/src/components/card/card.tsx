"use client";

import { cn } from "@ginga-ui/utils";
import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";

export type CardProps = React.ComponentProps<"div"> & ElementRenderProps<"div">;

export const Card: React.FC<CardProps> = ({ className, render, ...props }) =>
  renderElement("div", render, {
    className: cn("ginga-card", className),
    ...props,
  });

export type CardHeaderProps = React.ComponentProps<"div"> &
  ElementRenderProps<"div">;

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  render,
  ...props
}) =>
  renderElement("div", render, {
    className: cn("ginga-card-header", className),
    ...props,
  });

export type CardTitleProps = React.ComponentProps<"div"> &
  ElementRenderProps<"div">;

export const CardTitle: React.FC<CardTitleProps> = ({
  className,
  render,
  ...props
}) =>
  renderElement("div", render, {
    className: cn("ginga-card-title", className),
    ...props,
  });

export type CardDescriptionProps = React.ComponentProps<"p"> &
  ElementRenderProps<"p">;

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  render,
  ...props
}) =>
  renderElement("p", render, {
    className: cn("ginga-card-description", className),
    ...props,
  });

export type CardContentProps = React.ComponentProps<"div"> &
  ElementRenderProps<"div">;

export const CardContent: React.FC<CardContentProps> = ({
  className,
  render,
  ...props
}) =>
  renderElement("div", render, {
    className: cn("ginga-card-content", className),
    ...props,
  });

export type CardFooterProps = React.ComponentProps<"div"> &
  ElementRenderProps<"div">;

export const CardFooter: React.FC<CardFooterProps> = ({
  className,
  render,
  ...props
}) =>
  renderElement("div", render, {
    className: cn("ginga-card-footer", className),
    ...props,
  });
