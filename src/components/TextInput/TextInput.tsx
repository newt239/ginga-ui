import React, { ComponentProps } from "react";
import { Input } from "react-aria-components";

import classes from "./TextInput.module.css";

export type ButtonProps = ComponentProps<typeof Input>;

const TextInput: React.FC<ButtonProps> = (props) => {
  return <Input type="text" className={classes.root} {...props} />;
};

export default TextInput;
