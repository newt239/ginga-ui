import { ThemeClient } from "@ginga-ui/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { model, prompt, apiKey, provider } = await request.json();

    if (!apiKey || !prompt) {
      return NextResponse.json(
        { error: "APIキーとプロンプトが必要です" },
        { status: 400 }
      );
    }

    // 環境変数を一時的に設定
    const envKey =
      provider === "openai"
        ? "OPENAI_API_KEY"
        : provider === "google"
          ? "GOOGLE_GENERATIVE_AI_API_KEY"
          : "ANTHROPIC_API_KEY";

    const originalValue = process.env[envKey];
    process.env[envKey] = apiKey;

    try {
      const client = new ThemeClient({ model });
      const result = await client.generateTheme(prompt);

      return NextResponse.json(result);
    } finally {
      // 元の環境変数を復元
      if (originalValue !== undefined) {
        process.env[envKey] = originalValue;
      } else {
        delete process.env[envKey];
      }
    }
  } catch (error) {
    console.error("テーマ生成エラー:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "不明なエラー" },
      { status: 500 }
    );
  }
}
