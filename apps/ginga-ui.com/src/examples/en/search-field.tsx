"use client";

import { SearchField } from "@ginga-ui/core";
import { Search, X } from "lucide-react";

export function BasicExample() {
  return (
    <SearchField
      label="Search"
      placeholder="Enter keywords"
      icon={<Search />}
    />
  );
}

export function ShowLabelExample() {
  return (
    <SearchField
      label="Search"
      showLabel
      placeholder="Enter keywords"
      description="Press Enter to search and Esc to clear"
      onSubmit={(value) => console.log("Search:", value)}
    />
  );
}

export function IconExample() {
  return (
    <SearchField
      label="Search components"
      placeholder="Search components"
      defaultValue="Ginga UI"
      icon={<Search />}
      clearIcon={<X />}
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
