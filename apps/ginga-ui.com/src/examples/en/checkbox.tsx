"use client";

import { Checkbox, CheckboxGroup } from "@ginga-ui/core";
import styles from "../checkbox.module.css";

export function BasicExample() {
  return <Checkbox label="I agree to the terms of service" />;
}

export function SelectedExample() {
  return <Checkbox label="Selected by default" selected />;
}

export function DisabledExample() {
  return (
    <div className={styles.disabledStack}>
      <Checkbox label="Disabled checkbox" disabled />
      <Checkbox label="Disabled and selected" disabled selected />
    </div>
  );
}

export function CheckboxGroupExample() {
  return (
    <CheckboxGroup>
      <Checkbox value="option1" label="Option 1" />
      <Checkbox value="option2" label="Option 2" />
      <Checkbox value="option3" label="Option 3" />
    </CheckboxGroup>
  );
}
