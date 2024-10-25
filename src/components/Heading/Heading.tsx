import React from "react";

import styles from "./Heading.module.css";

import { cn } from "@/lib/utils";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, ...props }, ref) => {
    switch (level) {
      case "h1":
        return (
          <h1
            className={cn(styles.HeadingLevel1, className)}
            ref={ref}
            {...props}
          />
        );
      case "h2":
        return (
          <h2
            className={cn(styles.HeadingLevel2, className)}
            ref={ref}
            {...props}
          />
        );
      case "h3":
        return (
          <h3
            className={cn(styles.HeadingLevel3, className)}
            ref={ref}
            {...props}
          />
        );
      case "h4":
        return (
          <h4
            className={cn(styles.HeadingLevel4, className)}
            ref={ref}
            {...props}
          />
        );
      case "h5":
        return (
          <h5
            className={cn(styles.HeadingLevel5, className)}
            ref={ref}
            {...props}
          />
        );
      case "h6":
        return (
          <h6
            className={cn(styles.HeadingLevel6, className)}
            ref={ref}
            {...props}
          />
        );
      default:
        return null;
    }
  }
);
Heading.displayName = "Heading";

export default Heading;
