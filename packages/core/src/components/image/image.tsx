"use client";

import { cn } from "@ginga-ui/utils";
import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";
import type { OmitStrict } from "@ginga-ui/utils";

export type ImageProps = OmitStrict<React.ComponentProps<"img">, "alt"> &
  ElementRenderProps<"img"> & {
    alt: string;
    variant?: "default" | "avatar";
  };

export const Image: React.FC<ImageProps> = ({
  className,
  variant = "default",
  alt,
  render,
  ...props
}) =>
  renderElement("img", render, {
    className: cn("ginga-image", className),
    alt,
    "data-variant": variant,
    ...props,
  });
