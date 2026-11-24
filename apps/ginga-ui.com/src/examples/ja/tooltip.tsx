"use client";

import { Button, Tooltip, TooltipTrigger } from "@ginga-ui/core";
import { Settings } from "lucide-react";

import styles from "../tooltip.module.css";

export function BasicExample() {
  return (
    <TooltipTrigger>
      <Button variant="ghost" aria-label="設定">
        <Settings />
      </Button>
      <Tooltip>設定</Tooltip>
    </TooltipTrigger>
  );
}

export function PlacementsExample() {
  return (
    <div className={styles.placementList}>
      {(["top", "bottom", "left", "right"] as const).map((placement) => (
        <TooltipTrigger key={placement}>
          <Button variant="outline">{placement}</Button>
          <Tooltip placement={placement}>{placement} に表示されます</Tooltip>
        </TooltipTrigger>
      ))}
    </div>
  );
}

export function WithoutArrowExample() {
  return (
    <TooltipTrigger>
      <Button variant="light">矢印なし</Button>
      <Tooltip showArrow={false}>矢印のないツールチップです</Tooltip>
    </TooltipTrigger>
  );
}
