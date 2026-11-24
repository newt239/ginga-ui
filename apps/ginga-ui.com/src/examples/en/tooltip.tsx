"use client";

import { Button, Tooltip, TooltipTrigger } from "@ginga-ui/core";
import { Settings } from "lucide-react";

import styles from "../tooltip.module.css";

export function BasicExample() {
  return (
    <TooltipTrigger>
      <Button variant="ghost" aria-label="Settings">
        <Settings />
      </Button>
      <Tooltip>Settings</Tooltip>
    </TooltipTrigger>
  );
}

export function PlacementsExample() {
  return (
    <div className={styles.placementList}>
      {(["top", "bottom", "left", "right"] as const).map((placement) => (
        <TooltipTrigger key={placement}>
          <Button variant="outline">{placement}</Button>
          <Tooltip placement={placement}>Appears on the {placement}</Tooltip>
        </TooltipTrigger>
      ))}
    </div>
  );
}

export function WithoutArrowExample() {
  return (
    <TooltipTrigger>
      <Button variant="light">No arrow</Button>
      <Tooltip showArrow={false}>A tooltip without an arrow</Tooltip>
    </TooltipTrigger>
  );
}
