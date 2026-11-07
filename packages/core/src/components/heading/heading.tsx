"use client";

import { cn } from "@ginga-ui/utils";
import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = React.ComponentProps<"h1"> &
  ElementRenderProps<"h1"> & {
    level: HeadingLevel;
  };

export const Heading: React.FC<HeadingProps> = ({
  className,
  level,
  render,
  ...props
}) =>
  renderElement(`h${level}` as "h1", render, {
    className: cn("ginga-heading", `ginga-heading-level-${level}`, className),
    ...props,
  });
