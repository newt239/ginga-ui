"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

export type CardProps = React.ComponentProps<"div">;

export const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn("ginga-card", className)} {...props} />
);

export type CardHeaderProps = React.ComponentProps<"div">;

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  ...props
}) => <div className={cn("ginga-card-header", className)} {...props} />;

export type CardTitleProps = React.ComponentProps<"div">;

export const CardTitle: React.FC<CardTitleProps> = ({
  className,
  ...props
}) => <div className={cn("ginga-card-title", className)} {...props} />;

export type CardDescriptionProps = React.ComponentProps<"p">;

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  ...props
}) => <p className={cn("ginga-card-description", className)} {...props} />;

export type CardContentProps = React.ComponentProps<"div">;

export const CardContent: React.FC<CardContentProps> = ({
  className,
  ...props
}) => <div className={cn("ginga-card-content", className)} {...props} />;

export type CardFooterProps = React.ComponentProps<"div">;

export const CardFooter: React.FC<CardFooterProps> = ({
  className,
  ...props
}) => <div className={cn("ginga-card-footer", className)} {...props} />;
