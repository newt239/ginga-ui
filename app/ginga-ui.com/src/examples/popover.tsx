"use client";

import { Button, Popover, PopoverTrigger } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <PopoverTrigger>
      <Button variant="filled">詳細を表示</Button>
      <Popover>
        <p>これはポップオーバーの内容です。</p>
      </Popover>
    </PopoverTrigger>
  );
}

export function PlacementsExample() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {(["top", "bottom", "left", "right"] as const).map((placement) => (
        <PopoverTrigger key={placement}>
          <Button variant="outline">{placement}</Button>
          <Popover placement={placement}>
            <p>{placement} に表示されます。</p>
          </Popover>
        </PopoverTrigger>
      ))}
    </div>
  );
}

export function WithoutArrowExample() {
  return (
    <PopoverTrigger>
      <Button variant="light">矢印なし</Button>
      <Popover showArrow={false}>
        <p>矢印のないポップオーバーです。</p>
      </Popover>
    </PopoverTrigger>
  );
}
