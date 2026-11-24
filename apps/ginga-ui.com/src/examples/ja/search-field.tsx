"use client";

import { SearchField } from "@ginga-ui/core";
import { Search, X } from "lucide-react";

export function BasicExample() {
  return <SearchField label="検索" placeholder="キーワードを入力" />;
}

export function IconExample() {
  return (
    <SearchField
      aria-label="検索"
      placeholder="コンポーネントを検索"
      icon={<Search />}
      clearIcon={<X />}
    />
  );
}

export function SubmitExample() {
  return (
    <SearchField
      label="検索"
      placeholder="キーワードを入力"
      description="Enter で検索、Esc でクリアします"
      icon={<Search />}
      onSubmit={(value) => console.log("検索:", value)}
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
