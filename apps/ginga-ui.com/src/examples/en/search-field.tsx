"use client";

import { SearchField } from "@ginga-ui/core";
import { Search, X } from "lucide-react";

export function BasicExample() {
  return <SearchField label="Search" placeholder="Enter keywords" />;
}

export function IconExample() {
  return (
    <SearchField
      aria-label="Search"
      placeholder="Search components"
      icon={<Search />}
      clearIcon={<X />}
    />
  );
}

export function SubmitExample() {
  return (
    <SearchField
      label="Search"
      placeholder="Enter keywords"
      description="Press Enter to search and Esc to clear"
      icon={<Search />}
      onSubmit={(value) => console.log("Search:", value)}
    />
  );
}

export function DisabledExample() {
  return (
    <SearchField
      label="Search"
      defaultValue="Ginga UI"
      disabled
      icon={<Search />}
    />
  );
}
