"use client";

import { cn } from "@ginga-ui/utils";
import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";
import type { OmitStrict } from "@ginga-ui/utils";

export type ListProps = OmitStrict<React.ComponentProps<"ul">, "ref"> &
  ElementRenderProps<"ul"> & {
    type?: "ordered" | "unordered";
    ref?: React.Ref<HTMLUListElement & HTMLOListElement>;
  };

export const List: React.FC<ListProps> = ({
  type = "unordered",
  className,
  render,
  ...props
}) =>
  renderElement(type === "ordered" ? ("ol" as "ul") : "ul", render, {
    className: cn("ginga-list", className),
    "data-type": type,
    ...props,
  });

export type ListItemProps = React.ComponentProps<"li"> &
  ElementRenderProps<"li">;

export const ListItem: React.FC<ListItemProps> = ({
  className,
  render,
  ...props
}) =>
  renderElement("li", render, {
    className: cn("ginga-list-item", className),
    ...props,
  });
ListItem.displayName = "ListItem";
