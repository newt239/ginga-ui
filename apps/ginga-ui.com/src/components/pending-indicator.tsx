"use client";

import { useLinkStatus } from "next/link";
import { LoaderCircle } from "lucide-react";

export function PendingIndicator() {
  const { pending } = useLinkStatus();
  return pending ? (
    <LoaderCircle className="docs-spinner" aria-hidden="true" />
  ) : null;
}
