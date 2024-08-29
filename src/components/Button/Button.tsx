import React, { ComponentProps } from "react";
import { Button as AriaButton } from "react-aria-components";

import classes from "./Button.module.css";

export type ButtonProps = ComponentProps<typeof AriaButton>;

const Button: React.FC<ButtonProps> = (props) => {
  return <AriaButton className={classes.root}>{props.children}</AriaButton>;
};

export default Button;
