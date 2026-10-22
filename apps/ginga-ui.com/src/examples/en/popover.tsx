"use client";

import { Button, Popover, PopoverTrigger } from "@ginga-ui/core";
import { Info } from "lucide-react";

import styles from "../popover.module.css";

export function BasicExample() {
  return (
    <PopoverTrigger>
      <Button variant="filled" startIcon={<Info />}>
        Show details
      </Button>
      <Popover>
        <p>This is the popover content.</p>
      </Popover>
    </PopoverTrigger>
  );
}

export function PlacementsExample() {
  return (
    <div className={styles.placementList}>
      {(["top", "bottom", "left", "right"] as const).map((placement) => (
        <PopoverTrigger key={placement}>
          <Button variant="outline">{placement}</Button>
          <Popover placement={placement}>
            <p>Appears on the {placement}.</p>
          </Popover>
        </PopoverTrigger>
      ))}
    </div>
  );
}

export function WithoutArrowExample() {
  return (
    <PopoverTrigger>
      <Button variant="light">No arrow</Button>
      <Popover showArrow={false}>
        <p>A popover without an arrow.</p>
      </Popover>
    </PopoverTrigger>
  );
}
