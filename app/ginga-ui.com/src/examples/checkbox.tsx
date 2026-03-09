import { Checkbox, CheckboxGroup } from "@ginga-ui/core";

export function BasicExample() {
  return <Checkbox label="利用規約に同意する" />;
}

export function SelectedExample() {
  return <Checkbox label="デフォルトで選択" selected />;
}

export function DisabledExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Checkbox label="無効化されたチェックボックス" disabled />
      <Checkbox label="無効化かつ選択済み" disabled selected />
    </div>
  );
}

export function CheckboxGroupExample() {
  return (
    <CheckboxGroup>
      <Checkbox value="option1" label="オプション 1" />
      <Checkbox value="option2" label="オプション 2" />
      <Checkbox value="option3" label="オプション 3" />
    </CheckboxGroup>
  );
}
