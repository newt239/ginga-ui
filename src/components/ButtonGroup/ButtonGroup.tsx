import { type ButtonProps } from "@/components/Button/Button";
import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import classes from "./ButtonGroup.module.css";

export type ButtonGroupProps = ComponentProps<"div"> & {
  children: React.ReactElement<ButtonProps>[];
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(classes.ButtonGroup, className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        return React.cloneElement<ButtonProps>(child, {
          className: cn(classes.ButtonGroupItem, child.props.className),
          "data-position":
            index === 0
              ? "first"
              : index === React.Children.count(children) - 1
                ? "last"
                : "middle",
        });
      })}
    </div>
  );
};

export default ButtonGroup;
