"use client";

import { ComboBox, ComboBoxItem } from "@ginga-ui/core";
import { Check, ChevronDown } from "lucide-react";

const PREFECTURES = [
  { id: "", name: "" },
  { id: "hokkaido", name: "北海道" },
  { id: "tokyo", name: "東京都" },
  { id: "kanagawa", name: "神奈川県" },
  { id: "osaka", name: "大阪府" },
  { id: "kyoto", name: "京都府" },
  { id: "fukuoka", name: "福岡県" },
];

export function BasicExample() {
  return (
    <ComboBox
      label="都道府県"
      placeholder="入力して絞り込む"
      icon={<ChevronDown />}
      checkIcon={<Check />}
    >
      {PREFECTURES.map((p) => (
        <ComboBoxItem key={p.id} id={p.id}>
          {p.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  );
}

export function ValidationExample() {
  return (
    <ComboBox
      label="都道府県"
      description="お届け先の都道府県を選んでください"
      errorMessage="都道府県を選んでください"
      required
      icon={<ChevronDown />}
    >
      {PREFECTURES.map((p) => (
        <ComboBoxItem key={p.id} id={p.id}>
          {p.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  );
}

export function DisabledExample() {
  return (
    <ComboBox
      label="都道府県"
      disabled
      defaultSelectedKey="osaka"
      icon={<ChevronDown />}
    >
      {PREFECTURES.map((p) => (
        <ComboBoxItem key={p.id} id={p.id}>
          {p.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  );
}
