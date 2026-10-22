"use client";

import { useState } from "react";

import {
  Paragraph,
  SegmentedControl,
  SegmentedControlItem,
} from "@ginga-ui/core";
import { LayoutGrid, List, Rows3 } from "lucide-react";

export function BasicExample() {
  return (
    <SegmentedControl aria-label="表示期間" defaultValue="week">
      <SegmentedControlItem id="day">日</SegmentedControlItem>
      <SegmentedControlItem id="week">週</SegmentedControlItem>
      <SegmentedControlItem id="month">月</SegmentedControlItem>
    </SegmentedControl>
  );
}

export function IconExample() {
  return (
    <SegmentedControl aria-label="表示形式" defaultValue="grid">
      <SegmentedControlItem id="grid" aria-label="グリッド">
        <LayoutGrid />
      </SegmentedControlItem>
      <SegmentedControlItem id="list" aria-label="リスト">
        <List />
      </SegmentedControlItem>
      <SegmentedControlItem id="compact" aria-label="コンパクト">
        <Rows3 />
      </SegmentedControlItem>
    </SegmentedControl>
  );
}

export function SizeExample() {
  return (
    <SegmentedControl aria-label="並び順" defaultValue="new" size="sm">
      <SegmentedControlItem id="new">新着順</SegmentedControlItem>
      <SegmentedControlItem id="popular">人気順</SegmentedControlItem>
    </SegmentedControl>
  );
}

export function ControlledExample() {
  const [plan, setPlan] = useState("monthly");

  return (
    <div>
      <SegmentedControl aria-label="支払い周期" value={plan} onChange={setPlan}>
        <SegmentedControlItem id="monthly">月払い</SegmentedControlItem>
        <SegmentedControlItem id="yearly">年払い</SegmentedControlItem>
      </SegmentedControl>
      <Paragraph>選択中: {plan === "monthly" ? "月払い" : "年払い"}</Paragraph>
    </div>
  );
}
