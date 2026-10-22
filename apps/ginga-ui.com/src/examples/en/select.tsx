"use client";

import { Select, SelectItem } from "@ginga-ui/core";
import { Check, ChevronDown } from "lucide-react";

export function BasicExample() {
  return (
    <Select
      icon={<ChevronDown />}
      checkIcon={<Check />}
      defaultSelectedKey="cat"
      label="Favorite animal"
    >
      <SelectItem id="cat">Cat</SelectItem>
      <SelectItem id="dog">Dog</SelectItem>
      <SelectItem id="bird">Bird</SelectItem>
    </Select>
  );
}

export function DisabledOptionsExample() {
  return (
    <Select
      icon={<ChevronDown />}
      checkIcon={<Check />}
      defaultSelectedKey="dog"
      label="Choose a pet"
    >
      <SelectItem id="dog">Dog</SelectItem>
      <SelectItem id="cat">Cat</SelectItem>
      <SelectItem id="hamster" isDisabled>
        Hamster (out of stock)
      </SelectItem>
      <SelectItem id="parrot">Parrot</SelectItem>
    </Select>
  );
}

export function DisabledExample() {
  return (
    <Select
      icon={<ChevronDown />}
      checkIcon={<Check />}
      disabled
      defaultSelectedKey="cat"
      label="Favorite animal"
    >
      <SelectItem id="cat">Cat</SelectItem>
      <SelectItem id="dog">Dog</SelectItem>
      <SelectItem id="bird">Bird</SelectItem>
    </Select>
  );
}

export function ControlledExample() {
  return (
    <Select
      icon={<ChevronDown />}
      checkIcon={<Check />}
      label="Skill level"
      defaultSelectedKey="beginner"
      onSelectionChange={(key) => console.log("Selected:", key)}
    >
      <SelectItem id="beginner">Beginner</SelectItem>
      <SelectItem id="intermediate">Intermediate</SelectItem>
      <SelectItem id="advanced">Advanced</SelectItem>
    </Select>
  );
}
