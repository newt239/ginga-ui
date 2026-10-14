import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="docs-logo">
      <Image
        src="/shooting-star.svg"
        alt=""
        width={32}
        height={32}
        className="docs-logo-mark"
        priority
      />
      Ginga UI
    </Link>
  );
}
