"use client";

import React from "react";

import styles from "./List.module.css";

import { cn } from "@/lib/utils";

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  type?: "ordered" | "unordered";
}

export type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

const ListItem: React.FC<ListItemProps> = ({ className, ...props }) => {
  return <li className={cn(styles.listItem, className)} {...props} />;
};
ListItem.displayName = "ListItem";

const List: React.FC<ListProps> & { Item: React.FC<ListItemProps> } = ({
  type = "unordered",
  className,
  ...props
}) => {
  const Component = type === "ordered" ? "ol" : "ul";

  return (
    <Component
      className={cn(
        styles.list,
        type === "ordered" ? styles.orderedList : styles.unorderedList,
        className
      )}
      {...props}
    />
  );
};
List.displayName = "List";

List.Item = ListItem;

export default List;
