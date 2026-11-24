"use client";

import { SearchField } from "@ginga-ui/core";
import { Search, X } from "lucide-react";

export function BasicExample() {
  return (
    <SearchField
      label="検索"
      placeholder="キーワードを入力"
      icon={<Search />}
    />
  );
}

export function ShowLabelExample() {
  return (
    <SearchField
      label="検索"
      showLabel
      placeholder="キーワードを入力"
      description="Enter で検索、Esc でクリアします"
      onSubmit={(value) => console.log("検索:", value)}
    />
  );
}

export function IconExample() {
  return (
    <SearchField
      label="コンポーネントを検索"
      placeholder="コンポーネントを検索"
      defaultValue="Ginga UI"
      icon={<Search />}
      clearIcon={<X />}
    />
  );
}

export function DisabledExample() {
  return (
    <SearchField
      label="検索"
      defaultValue="Ginga UI"
      disabled
      icon={<Search />}
    />
  );
}
