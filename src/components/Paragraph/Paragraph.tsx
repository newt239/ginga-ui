"use client";

import styles from "./Paragraph.module.css";

import { cn } from "@/lib/utils";

export type ParagraphProps = React.HTMLAttributes<HTMLDivElement>;

const Paragraph: React.FC<ParagraphProps> = ({ className, ...props }) => {
  return <div className={cn(styles.paragraph, className)} {...props} />;
};

export default Paragraph;
