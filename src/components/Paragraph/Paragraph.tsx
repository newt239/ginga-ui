"use client";

import { cn } from "@/lib/utils";
import React from "react";

import styles from "./Paragraph.module.css";

export type ParagraphProps = React.HTMLAttributes<HTMLDivElement>;

const Paragraph = React.forwardRef<HTMLDivElement, ParagraphProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(styles.paragraph, className)} ref={ref} {...props} />
    );
  }
);

export default Paragraph;
