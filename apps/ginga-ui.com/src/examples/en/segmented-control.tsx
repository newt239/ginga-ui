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
    <SegmentedControl aria-label="Time range" defaultValue="week">
      <SegmentedControlItem id="day">Day</SegmentedControlItem>
      <SegmentedControlItem id="week">Week</SegmentedControlItem>
      <SegmentedControlItem id="month">Month</SegmentedControlItem>
    </SegmentedControl>
  );
}

export function IconExample() {
  return (
    <SegmentedControl aria-label="View" defaultValue="grid">
      <SegmentedControlItem id="grid" aria-label="Grid">
        <LayoutGrid />
      </SegmentedControlItem>
      <SegmentedControlItem id="list" aria-label="List">
        <List />
      </SegmentedControlItem>
      <SegmentedControlItem id="compact" aria-label="Compact">
        <Rows3 />
      </SegmentedControlItem>
    </SegmentedControl>
  );
}

export function SizeExample() {
  return (
    <SegmentedControl aria-label="Sort order" defaultValue="new" size="sm">
      <SegmentedControlItem id="new">Newest</SegmentedControlItem>
      <SegmentedControlItem id="popular">Popular</SegmentedControlItem>
    </SegmentedControl>
  );
}

export function ControlledExample() {
  const [plan, setPlan] = useState("monthly");

  return (
    <div>
      <SegmentedControl
        aria-label="Billing period"
        value={plan}
        onChange={setPlan}
      >
        <SegmentedControlItem id="monthly">Monthly</SegmentedControlItem>
        <SegmentedControlItem id="yearly">Yearly</SegmentedControlItem>
      </SegmentedControl>
      <Paragraph>
        Selected: {plan === "monthly" ? "Monthly" : "Yearly"}
      </Paragraph>
    </div>
  );
}
