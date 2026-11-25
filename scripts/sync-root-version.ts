import { readFileSync, writeFileSync } from "node:fs";

const readJson = (path: string) => JSON.parse(readFileSync(path, "utf8"));

const rootPath = "package.json";
const root = readJson(rootPath);
const { version } = readJson("packages/core/package.json");

if (root.version !== version) {
  writeFileSync(rootPath, `${JSON.stringify({ ...root, version }, null, 2)}\n`);
}
