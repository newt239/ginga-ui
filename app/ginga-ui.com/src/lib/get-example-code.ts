import fs from "node:fs/promises";
import path from "node:path";

export async function getExampleCode(
  componentId: string,
  exampleName: string
): Promise<string> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/examples",
      `${componentId}.tsx`
    );
    const content = await fs.readFile(filePath, "utf-8");

    // 関数定義を抽出（正規表現で簡易実装）
    const regex = new RegExp(`export function ${exampleName}[\\s\\S]*?^}`, "m");
    const match = content.match(regex);
    return match ? match[0] : "";
  } catch (error) {
    console.error(
      `Failed to read example code: ${componentId}/${exampleName}`,
      error
    );
    return "";
  }
}
