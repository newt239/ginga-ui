import React, { useEffect, useId, useRef } from "react";
import { Label } from "react-aria-components";
import classes from "./FormControl.module.css";

type Props = {
  title: string;
  htmlFor?: string;
  labelId?: string;
  className?: string;
  children: React.ReactNode;
};

const FormControl = React.forwardRef<HTMLDivElement, Props>(
  ({ title, htmlFor, labelId, className, children, ...props }, ref) => {
    const defaultHtmlFor = useId();
    const managedHtmlFor = htmlFor || defaultHtmlFor;
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
      <div
        {...props}
        className={`${classes.formControl} ${className || ""}`}
        ref={ref}
      >
        <Label htmlFor={managedHtmlFor} className={classes.label}>
          {title}
        </Label>
        <div ref={inputWrapperRef} className={classes.inputWrapper}>
          {children}
        </div>
      </div>
    );
  }
);

FormControl.displayName = "FormControl";

export default FormControl;
