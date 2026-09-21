"use client";

import { Badge } from "@ginga-ui/core";

export function BasicExample() {
  return <Badge>New</Badge>;
}

export function VariantsExample() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
}

export function WithTextExample() {
  return (
    <p style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      通知が届いています
      <Badge variant="danger">3</Badge>
    </p>
  );
}
