"use client";

import { Switch } from "@ginga-ui/core";

import styles from "../switch.module.css";

export function BasicExample() {
  return <Switch>Allow notifications</Switch>;
}

export function SelectedExample() {
  return <Switch selected>On by default</Switch>;
}

export function DisabledExample() {
  return (
    <div className={styles.disabledList}>
      <Switch disabled>Disabled (off)</Switch>
      <Switch disabled selected>
        Disabled (on)
      </Switch>
    </div>
  );
}

export function ControlledExample() {
  return (
    <Switch onChange={(isSelected) => console.log("State:", isSelected)}>
      Dark mode
    </Switch>
  );
}
