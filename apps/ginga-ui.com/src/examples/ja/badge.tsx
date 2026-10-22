"use client";

import { Badge } from "@ginga-ui/core";
import styles from "../badge.module.css";

export function BasicExample() {
  return <Badge>New</Badge>;
}

export function VariantsExample() {
  return (
    <div className={styles.badgeRow}>
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
    <p className={styles.notification}>
      通知が届いています
      <Badge variant="danger">3</Badge>
    </p>
  );
}
