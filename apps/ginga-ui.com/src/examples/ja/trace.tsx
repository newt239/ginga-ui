"use client";

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@ginga-ui/core";
import {
  ArrowUpRight,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  CircleDashed,
  FileText,
  LoaderCircle,
  Search,
  Terminal,
} from "lucide-react";
import styles from "../trace.module.css";

export function BasicExample() {
  return (
    <Trace className={styles.trace}>
      <TraceLine>
        <TraceIcon>
          <Search />
        </TraceIcon>
        <TraceTitle>minimumReleaseAge を検索</TraceTitle>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <FileText />
        </TraceIcon>
        <TraceTitle>pnpm-workspace.yaml を読み込み</TraceTitle>
      </TraceLine>
    </Trace>
  );
}

export function StatusExample() {
  return (
    <Trace className={styles.trace}>
      <TraceLine>
        <TraceIcon>
          <CircleCheck />
        </TraceIcon>
        <TraceTitle>pnpm --version を実行</TraceTitle>
      </TraceLine>
      <TraceLine status="error">
        <TraceIcon>
          <CircleAlert />
        </TraceIcon>
        <TraceTitle>pnpm install の実行に失敗</TraceTitle>
      </TraceLine>
      <TraceLine status="running">
        <TraceIcon>
          <LoaderCircle />
        </TraceIcon>
        <TraceTitle>ロックファイルを更新中</TraceTitle>
      </TraceLine>
      <TraceLine status="pending">
        <TraceIcon>
          <CircleDashed />
        </TraceIcon>
        <TraceTitle>テストを実行</TraceTitle>
      </TraceLine>
    </Trace>
  );
}

export function CollapsibleExample() {
  return (
    <Trace className={styles.trace}>
      <TraceCollapsible defaultExpanded>
        <TraceCollapsibleTrigger icon={<ChevronRight />}>
          <TraceLine>
            <TraceIcon>
              <Terminal />
            </TraceIcon>
            <TraceTitle>git diff --stat を実行</TraceTitle>
            <TraceDescription>+2 -1</TraceDescription>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          package.json | 2 +-（1ファイルを変更）
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <TraceCollapsible>
        <TraceCollapsibleTrigger icon={<ChevronRight />}>
          <TraceLine>
            <TraceIcon>
              <Search />
            </TraceIcon>
            <TraceTitle>ソースを2件参照</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <TraceLine>
            <TraceTitle>pnpm install のドキュメント</TraceTitle>
          </TraceLine>
          <TraceLine>
            <TraceTitle>ロックファイルの仕組み</TraceTitle>
          </TraceLine>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  );
}

export function LinkExample() {
  return (
    <Trace className={styles.trace}>
      <a
        href="https://pnpm.io/"
        target="_blank"
        rel="noreferrer"
        aria-label="pnpm のドキュメントを参照（新しいタブで開きます）"
      >
        <TraceLine>
          <TraceTitle>pnpm のドキュメントを参照</TraceTitle>
          <TraceIcon>
            <ArrowUpRight />
          </TraceIcon>
        </TraceLine>
      </a>
    </Trace>
  );
}
