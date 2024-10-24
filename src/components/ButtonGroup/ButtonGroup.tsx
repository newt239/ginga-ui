import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import { type ButtonProps } from "../Button/Button";

export type ButtonGroupProps = ComponentProps<"div"> & {
  children: React.ReactElement<ButtonProps>[];
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("button-group", className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        return React.cloneElement<ButtonProps>(child, {
          className: cn(child.props.className, "button-group__item"),
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
