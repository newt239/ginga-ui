"use client";

import styles from "./Heading.module.css";

import { cn } from "@ginga-ui/utils";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading: React.FC<HeadingProps> = ({ className, level, ...props }) => {
  switch (level) {
    case "h1":
      return (
        <h1
          className={cn(styles.heading, styles["heading-level-1"], className)}
          {...props}
        />
      );
    case "h2":
      return (
        <h2
          className={cn(styles.heading, styles["heading-level-2"], className)}
          {...props}
        />
      );
    case "h3":
      return (
        <h3
          className={cn(styles.heading, styles["heading-level-3"], className)}
          {...props}
        />
      );
    case "h4":
      return (
        <h4
          className={cn(styles.heading, styles["heading-level-4"], className)}
          {...props}
        />
      );
    case "h5":
      return (
        <h5
          className={cn(styles.heading, styles["heading-level-5"], className)}
          {...props}
        />
      );
    case "h6":
      return (
        <h6
          className={cn(styles.heading, styles["heading-level-6"], className)}
          {...props}
        />
      );
    default:
      return null;
  }
};