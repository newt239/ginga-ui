import { Radio, RadioGroup } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <RadioGroup>
      <Radio value="option1">オプション 1</Radio>
      <Radio value="option2">オプション 2</Radio>
      <Radio value="option3">オプション 3</Radio>
    </RadioGroup>
  );
}

export function DefaultValueExample() {
  return (
    <RadioGroup defaultValue="option2">
      <Radio value="option1">オプション 1</Radio>
      <Radio value="option2">オプション 2(デフォルト選択)</Radio>
      <Radio value="option3">オプション 3</Radio>
    </RadioGroup>
  );
}

export function DisabledExample() {
  return (
    <RadioGroup>
      <Radio value="option1">オプション 1</Radio>
      <Radio value="option2" disabled>
        オプション 2(無効)
      </Radio>
      <Radio value="option3">オプション 3</Radio>
    </RadioGroup>
  );
}

export function ControlledExample() {
  return (
    <RadioGroup onChange={(value) => console.log("選択:", value)}>
      <Radio value="small">小</Radio>
      <Radio value="medium">中</Radio>
      <Radio value="large">大</Radio>
    </RadioGroup>
  );
}
