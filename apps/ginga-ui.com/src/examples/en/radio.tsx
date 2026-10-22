"use client";

import { Radio, RadioGroup } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <RadioGroup>
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  );
}

export function DefaultValueExample() {
  return (
    <RadioGroup defaultValue="option2">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2 (selected by default)</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  );
}

export function DisabledExample() {
  return (
    <RadioGroup>
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2" disabled>
        Option 2 (disabled)
      </Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  );
}

export function ControlledExample() {
  return (
    <RadioGroup onChange={(value) => console.log("Selected:", value)}>
      <Radio value="small">Small</Radio>
      <Radio value="medium">Medium</Radio>
      <Radio value="large">Large</Radio>
    </RadioGroup>
  );
}
