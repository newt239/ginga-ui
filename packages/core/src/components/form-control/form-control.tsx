"use client";

import { createContext, useContext, useId } from "react";

import { cn } from "@ginga-ui/utils";
import {
  ComboBoxContext,
  InputContext,
  Label,
  Provider,
  SelectContext,
  TextAreaContext,
} from "react-aria-components";
import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";

import type { OmitStrict } from "@ginga-ui/utils";

export type FormControlFieldProps = {
  id: string;
  "aria-labelledby": string;
};

const FormControlContext = createContext<FormControlFieldProps | null>(null);

export const useFormControlField = (): FormControlFieldProps | null =>
  useContext(FormControlContext);

export type FormControlProps = OmitStrict<
  React.ComponentProps<"div">,
  "children"
> &
  ElementRenderProps<"div"> & {
    label: React.ReactNode;
    htmlFor?: string;
    children: React.ReactNode;
  };

export const FormControl: React.FC<FormControlProps> = ({
  label,
  htmlFor,
  className,
  children,
  render,
  ...props
}) => {
  const generatedControlId = useId();
  const labelId = useId();
  const controlId = htmlFor ?? generatedControlId;
  const fieldProps: FormControlFieldProps = {
    id: controlId,
    "aria-labelledby": labelId,
  };

  return renderElement("div", render, {
    ...props,
    className: cn("ginga-form-control", className),
    children: (
      <>
        <Label
          id={labelId}
          htmlFor={controlId}
          className="ginga-form-control-label"
        >
          {label}
        </Label>
        <div className="ginga-form-control-inner">
          <FormControlContext.Provider value={fieldProps}>
            <Provider
              values={[
                [InputContext, fieldProps],
                [TextAreaContext, fieldProps],
                [SelectContext, { "aria-labelledby": labelId }],
                [ComboBoxContext, { "aria-labelledby": labelId }],
              ]}
            >
              {children}
            </Provider>
          </FormControlContext.Provider>
        </div>
      </>
    ),
  });
};
