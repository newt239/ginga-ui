"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn("ginga-card", className)} {...props} />
);

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  ...props
}) => <div className={cn("ginga-card-header", className)} {...props} />;

export type CardTitleProps = React.HTMLAttributes<HTMLDivElement>;

export const CardTitle: React.FC<CardTitleProps> = ({
  className,
  ...props
}) => <div className={cn("ginga-card-title", className)} {...props} />;

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  ...props
}) => <p className={cn("ginga-card-description", className)} {...props} />;

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent: React.FC<CardContentProps> = ({
  className,
  ...props
}) => <div className={cn("ginga-card-content", className)} {...props} />;

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter: React.FC<CardFooterProps> = ({
  className,
  ...props
}) => <div className={cn("ginga-card-footer", className)} {...props} />;
