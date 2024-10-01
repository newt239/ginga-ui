import React, { ComponentProps } from "react";
import { Switch as AriaSwitch } from "react-aria-components";

import classes from "./Switch.module.css";

export type SwitchProps = ComponentProps<typeof AriaSwitch>;

const TextInput: React.FC<SwitchProps> = (props) => {
  const { ...rest } = props;
  return (
    <AriaSwitch className={classes.root} {...rest}>
      <div className="indicator" />
      aaa
    </AriaSwitch>
  );
};

export default TextInput;
