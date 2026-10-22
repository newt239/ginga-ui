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
        <TraceTitle>Searched for minimumReleaseAge</TraceTitle>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <FileText />
        </TraceIcon>
        <TraceTitle>Read pnpm-workspace.yaml</TraceTitle>
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
        <TraceTitle>Ran pnpm --version</TraceTitle>
      </TraceLine>
      <TraceLine status="error">
        <TraceIcon>
          <CircleAlert />
        </TraceIcon>
        <TraceTitle>Failed to run pnpm install</TraceTitle>
      </TraceLine>
      <TraceLine status="running">
        <TraceIcon>
          <LoaderCircle />
        </TraceIcon>
        <TraceTitle>Updating the lockfile</TraceTitle>
      </TraceLine>
      <TraceLine status="pending">
        <TraceIcon>
          <CircleDashed />
        </TraceIcon>
        <TraceTitle>Run the tests</TraceTitle>
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
            <TraceTitle>Ran git diff --stat</TraceTitle>
            <TraceDescription>+2 -1</TraceDescription>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          package.json | 2 +- (1 file changed)
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <TraceCollapsible>
        <TraceCollapsibleTrigger icon={<ChevronRight />}>
          <TraceLine>
            <TraceIcon>
              <Search />
            </TraceIcon>
            <TraceTitle>Used 2 sources</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <TraceLine>
            <TraceTitle>pnpm install documentation</TraceTitle>
          </TraceLine>
          <TraceLine>
            <TraceTitle>How lockfiles work</TraceTitle>
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
        aria-label="Read the pnpm documentation (opens in a new tab)"
      >
        <TraceLine>
          <TraceTitle>Read the pnpm documentation</TraceTitle>
          <TraceIcon>
            <ArrowUpRight />
          </TraceIcon>
        </TraceLine>
      </a>
    </Trace>
  );
}
