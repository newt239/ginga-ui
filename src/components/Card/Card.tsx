"use client";

import styles from "./Card.module.css";

import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn(styles.card, className)} {...props} />
);

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => (
  <div className={cn(styles["card-header"], className)} {...props} />
);

export type CardTitleProps = React.HTMLAttributes<HTMLDivElement>;

const CardTitle: React.FC<CardTitleProps> = ({ className, ...props }) => (
  <div className={cn(styles["card-title"], className)} {...props} />
);

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  ...props
}) => <p className={cn(styles["card-description"], className)} {...props} />;

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => (
  <div className={cn(styles["card-content"], className)} {...props} />
);

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const CardFooter: React.FC<CardFooterProps> = ({ className, ...props }) => (
  <div className={cn(styles["card-footer"], className)} {...props} />
);

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
