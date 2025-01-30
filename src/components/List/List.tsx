"use client";

import styles from "./List.module.css";

import { cn } from "@/lib/utils";

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  type?: "ordered" | "unordered";
}

const List: React.FC<ListProps> = ({
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

export type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

const ListItem: React.FC<ListItemProps> = ({ className, ...props }) => {
  return <li className={cn(styles.listItem, className)} {...props} />;
};
ListItem.displayName = "ListItem";

export { List, ListItem };
