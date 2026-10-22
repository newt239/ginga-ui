"use client";

import { Switch } from "@ginga-ui/core";

import styles from "../switch.module.css";

export function BasicExample() {
  return <Switch>通知を許可</Switch>;
}

export function SelectedExample() {
  return <Switch selected>デフォルトでオン</Switch>;
}

export function DisabledExample() {
  return (
    <div className={styles.disabledList}>
      <Switch disabled>無効化(オフ)</Switch>
      <Switch disabled selected>
        無効化(オン)
      </Switch>
    </div>
  );
}

export function ControlledExample() {
  return (
    <Switch onChange={(isSelected) => console.log("状態:", isSelected)}>
      ダークモード
    </Switch>
  );
}
