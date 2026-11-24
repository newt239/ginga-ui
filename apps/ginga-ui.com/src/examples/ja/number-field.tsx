"use client";

import { NumberField } from "@ginga-ui/core";
import { Minus, Plus } from "lucide-react";

export function BasicExample() {
  return (
    <NumberField label="数量" defaultValue={1} minValue={0} maxValue={10} />
  );
}

export function IconExample() {
  return (
    <NumberField
      label="人数"
      defaultValue={2}
      minValue={1}
      decrementIcon={<Minus />}
      incrementIcon={<Plus />}
    />
  );
}

export function FormatExample() {
  return (
    <NumberField
      label="金額"
      defaultValue={1500}
      step={100}
      formatOptions={{ style: "currency", currency: "JPY" }}
      description="100 円単位で指定します"
    />
  );
}

export function DisabledExample() {
  return <NumberField label="数量" defaultValue={3} disabled />;
}
