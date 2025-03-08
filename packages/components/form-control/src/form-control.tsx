"use client";

import { useEffect, useId, useRef } from "react";

import { cn } from "packages/utils/dist";
import { Label } from "react-aria-components";
import "./index.css";

export type FormControlProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
};

export const FormControl: React.FC<FormControlProps> = ({
  title,
  htmlFor,
  className,
  children,
  ...props
}) => {
  const defaultHtmlFor = useId();
  const managedHtmlFor = htmlFor ?? defaultHtmlFor;
  const inputWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inputWrapper = inputWrapperRef.current;
    if (inputWrapper) {
      const input = inputWrapper.querySelector("input");
      if (input && !input.id) {
        input.id = managedHtmlFor;
      }
    }
  }, [managedHtmlFor]);

  return (
    <div {...props} className={cn("ginga-form-control", className)}>
      <Label htmlFor={managedHtmlFor} className={"ginga-form-control-label"}>
        {title}
      </Label>
      <div ref={inputWrapperRef} className={"ginga-form-control-inner"}>
        {children}
      </div>
    </div>
  );
};
