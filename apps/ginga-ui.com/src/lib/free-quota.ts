import { neon } from "@neondatabase/serverless";

export const FREE_QUOTA_LIMIT = 100;

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL が設定されていません");
  }
  return neon(databaseUrl);
}

export async function getRemainingFreeQuota() {
  const sql = getSql();
  const rows = await sql`
    SELECT COUNT(*)::int AS count FROM theme_generations
    WHERE created_at > now() - interval '24 hours'
  `;
  const count = rows[0]?.count as number;
  return Math.max(FREE_QUOTA_LIMIT - count, 0);
}

export async function reserveFreeGeneration(model: string, prompt: string) {
  const sql = getSql();
  const rows = await sql`
    INSERT INTO theme_generations (model, prompt)
    SELECT ${model}, ${prompt}
    WHERE (
      SELECT COUNT(*) FROM theme_generations
      WHERE created_at > now() - interval '24 hours'
    ) < ${FREE_QUOTA_LIMIT}
    RETURNING id
  `;
  return rows[0]?.id as number | undefined;
}

export async function recordFreeGenerationResult(
  id: number,
  status: "success" | "error",
  response: string
) {
  const sql = getSql();
  await sql`
    UPDATE theme_generations SET status = ${status}, response = ${response}
    WHERE id = ${id}
  `;
}
