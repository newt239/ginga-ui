import { Select } from "@ginga-ui/core";
import { ListBoxItem } from "react-aria-components";

export function BasicExample() {
  return (
    <Select defaultSelectedKey="cat" label="好きな動物">
      <ListBoxItem id="cat">猫</ListBoxItem>
      <ListBoxItem id="dog">犬</ListBoxItem>
      <ListBoxItem id="bird">鳥</ListBoxItem>
    </Select>
  );
}

export function DisabledOptionsExample() {
  return (
    <Select defaultSelectedKey="dog" label="ペットを選択">
      <ListBoxItem id="dog">犬</ListBoxItem>
      <ListBoxItem id="cat">猫</ListBoxItem>
      <ListBoxItem id="hamster" isDisabled>
        ハムスター(在庫切れ)
      </ListBoxItem>
      <ListBoxItem id="parrot">オウム</ListBoxItem>
    </Select>
  );
}

export function DisabledExample() {
  return (
    <Select disabled defaultSelectedKey="cat" label="好きな動物">
      <ListBoxItem id="cat">猫</ListBoxItem>
      <ListBoxItem id="dog">犬</ListBoxItem>
      <ListBoxItem id="bird">鳥</ListBoxItem>
    </Select>
  );
}

export function ControlledExample() {
  return (
    <Select
      label="スキルレベル"
      defaultSelectedKey="beginner"
      onSelectionChange={(key) => console.log("選択:", key)}
    >
      <ListBoxItem id="beginner">初心者</ListBoxItem>
      <ListBoxItem id="intermediate">中級者</ListBoxItem>
      <ListBoxItem id="advanced">上級者</ListBoxItem>
    </Select>
  );
}
