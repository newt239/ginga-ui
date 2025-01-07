"use client";

import { cn } from "@/lib/utils";
import React from "react";

import styles from "./Paragraph.module.css";

export type ParagraphProps = React.HTMLAttributes<HTMLDivElement>;

const Paragraph: React.FC<ParagraphProps> = ({ className, ...props }) => {
  return <div className={cn(styles.paragraph, className)} {...props} />;
};

export default Paragraph;
