import { writeFileSync } from "node:fs";
import {
  CHANGE_KIND_LABELS,
  CHANGE_KINDS,
  CHANGELOG,
} from "../apps/ginga-ui.com/src/data/changelog.ts";

const sections = CHANGELOG.map(({ version, date, changes }) => {
  const heading = `## v${version}${date ? ` (${date})` : ""}`;
  const groups = CHANGE_KINDS.flatMap((kind) => {
    const items = changes.filter((change) => change.kind === kind);
    if (items.length === 0) return [];
    return [
      `### ${CHANGE_KIND_LABELS[kind].ja}\n\n${items.map((item) => `- ${item.ja}`).join("\n")}`,
    ];
  });
  return [heading, ...groups].join("\n\n");
});

const header = `# 変更履歴

\`@ginga-ui/core\` と \`@ginga-ui/utils\` の利用者向けの変更をまとめています。両パッケージは常に同じバージョンで公開されます。

このファイルは \`apps/ginga-ui.com/src/data/changelog.ts\` から \`pnpm changelog\` で生成しています。`;

writeFileSync("CHANGELOG.md", `${[header, ...sections].join("\n\n")}\n`);
