"use client";

import { NumberField } from "@ginga-ui/core";
import { Minus, Plus } from "lucide-react";

export function BasicExample() {
  return (
    <NumberField label="Quantity" defaultValue={1} minValue={0} maxValue={10} />
  );
}

export function IconExample() {
  return (
    <NumberField
      label="Guests"
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
      label="Price"
      defaultValue={15}
      step={0.5}
      formatOptions={{ style: "currency", currency: "USD" }}
      description="Specify in steps of $0.50"
    />
  );
}

export function DisabledExample() {
  return <NumberField label="Quantity" defaultValue={3} disabled />;
}
