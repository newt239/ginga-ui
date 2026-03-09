import { Switch } from "@ginga-ui/core";

export function BasicExample() {
  return <Switch>通知を許可</Switch>;
}

export function SelectedExample() {
  return <Switch selected>デフォルトでオン</Switch>;
}

export function DisabledExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
