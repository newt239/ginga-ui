"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type ListProps = OmitStrict<React.ComponentProps<"ul">, "ref"> & {
  type?: "ordered" | "unordered";
  ref?: React.Ref<HTMLUListElement & HTMLOListElement>;
};

export const List: React.FC<ListProps> = ({
  type = "unordered",
  className,
  ...props
}) => {
  const Component = type === "ordered" ? "ol" : "ul";

  return (
    <Component
      className={cn("ginga-list", className)}
      data-type={type}
      {...props}
    />
  );
};

export type ListItemProps = React.ComponentProps<"li">;

export const ListItem: React.FC<ListItemProps> = ({ className, ...props }) => {
  return <li className={cn("ginga-list-item", className)} {...props} />;
};
ListItem.displayName = "ListItem";
