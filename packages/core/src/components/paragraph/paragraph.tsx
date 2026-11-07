"use client";

import { cn } from "@ginga-ui/utils";
import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";

export type ParagraphProps = React.ComponentProps<"p"> &
  ElementRenderProps<"p">;

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  render,
  ...props
}) =>
  renderElement("p", render, {
    className: cn("ginga-paragraph", className),
    ...props,
  });
