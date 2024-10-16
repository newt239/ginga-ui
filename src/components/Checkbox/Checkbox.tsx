import React, { ComponentProps } from "react";
import { Checkbox as AriaCheckbox } from "react-aria-components";

import classes from "./Checkbox.module.css";

export type SwitchProps = ComponentProps<typeof AriaCheckbox>;

const Checkbox: React.FC<SwitchProps> = (props) => {
  const { ...rest } = props;
  return (
    <AriaCheckbox className={classes.root} {...rest}>
      <div className={classes.checkbox}>
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      Unsubscribe
    </AriaCheckbox>
  );
};

export default Checkbox;
