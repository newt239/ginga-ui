"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  type?: "ordered" | "unordered";
}

export const List: React.FC<ListProps> = ({
  type = "unordered",
  className,
  ...props
}) => {
  const Component = type === "ordered" ? "ol" : "ul";

  return (
    <Component
      className={cn(
        "ginga-list",
        type === "ordered" ? "ginga-orderedList" : "ginga-unorderedList",
        className
      )}
      {...props}
    />
  );
};

export type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

export const ListItem: React.FC<ListItemProps> = ({ className, ...props }) => {
  return <li className={cn("ginga-listItem", className)} {...props} />;
};
ListItem.displayName = "ListItem";
