import React from "react";

import classes from "./Button.module.css";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  return <button className={classes.root}>{props.children}</button>;
};

export default Button;
