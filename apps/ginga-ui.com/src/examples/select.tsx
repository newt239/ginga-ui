"use client";

import { Select, SelectItem } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Select defaultSelectedKey="cat" label="好きな動物">
      <SelectItem id="cat">猫</SelectItem>
      <SelectItem id="dog">犬</SelectItem>
      <SelectItem id="bird">鳥</SelectItem>
    </Select>
  );
}

export function DisabledOptionsExample() {
  return (
    <Select defaultSelectedKey="dog" label="ペットを選択">
      <SelectItem id="dog">犬</SelectItem>
      <SelectItem id="cat">猫</SelectItem>
      <SelectItem id="hamster" isDisabled>
        ハムスター(在庫切れ)
      </SelectItem>
      <SelectItem id="parrot">オウム</SelectItem>
    </Select>
  );
}

export function DisabledExample() {
  return (
    <Select disabled defaultSelectedKey="cat" label="好きな動物">
      <SelectItem id="cat">猫</SelectItem>
      <SelectItem id="dog">犬</SelectItem>
      <SelectItem id="bird">鳥</SelectItem>
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
      <SelectItem id="beginner">初心者</SelectItem>
      <SelectItem id="intermediate">中級者</SelectItem>
      <SelectItem id="advanced">上級者</SelectItem>
    </Select>
  );
}
