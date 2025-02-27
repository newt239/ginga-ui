"use client";

import styles from "./Paragraph.module.css";

import { cn } from "@ginga-ui/utils";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph: React.FC<ParagraphProps> = ({ className, ...props }) => {
  return <p className={cn(styles.paragraph, className)} {...props} />;
};