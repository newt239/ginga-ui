"use client";

import { ComboBox, ComboBoxItem } from "@ginga-ui/core";
import { Check, ChevronDown } from "lucide-react";

const PREFECTURES = [
  { id: "", name: "" },
  { id: "hokkaido", name: "Hokkaido" },
  { id: "tokyo", name: "Tokyo" },
  { id: "kanagawa", name: "Kanagawa" },
  { id: "osaka", name: "Osaka" },
  { id: "kyoto", name: "Kyoto" },
  { id: "fukuoka", name: "Fukuoka" },
];

export function BasicExample() {
  return (
    <ComboBox
      label="Prefecture"
      placeholder="Type to filter"
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
      label="Prefecture"
      description="Choose the prefecture for delivery"
      errorMessage="Choose a prefecture"
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
      label="Prefecture"
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
