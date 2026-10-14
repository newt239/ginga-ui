import Link from "next/link";
import { Orbit } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="docs-logo">
      <span className="docs-logo-mark" aria-hidden="true">
        <Orbit />
      </span>
      Ginga UI
    </Link>
  );
}
