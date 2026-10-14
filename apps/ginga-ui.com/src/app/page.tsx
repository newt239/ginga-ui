import { Anchor, Heading } from "@ginga-ui/core";
import { ArrowRight, LayoutGrid, Sparkles } from "lucide-react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <article>
      <Heading level="h1" className={styles.title}>
        Ginga UI
      </Heading>
      <Image
        src="/ginga-ui-eyecatch.webp"
        alt="Ginga UI の紹介画像。UI Component Library for React、20+ Components、Accessible、Simple to Use、TypeScript Based、Support SSR、Free and Opensource、Generate Theme with AI の特徴が並んでいる。"
        width={1920}
        height={1080}
        sizes="(width <= 56rem) 100vw, 52rem"
        className={styles.visual}
        priority
      />
      <div className={styles.actions}>
        <Anchor
          href="/quick-start"
          variant="button"
          size="lg"
          endIcon={<ArrowRight />}
        >
          クイックスタート
        </Anchor>
        <Anchor
          href="/theme-generation"
          variant="button"
          buttonVariant="light"
          size="lg"
          startIcon={<Sparkles />}
        >
          テーマ生成
        </Anchor>
        <Anchor
          href="/components"
          variant="button"
          buttonVariant="ghost"
          size="lg"
          startIcon={<LayoutGrid />}
        >
          全コンポーネント
        </Anchor>
      </div>
    </article>
  );
}
