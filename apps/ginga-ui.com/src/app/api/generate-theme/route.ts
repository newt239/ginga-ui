import {
  DEFAULT_MODELS,
  PROVIDERS,
  ThemeClient,
  type ThemeProvider,
} from "@ginga-ui/utils";
import { NextRequest, NextResponse } from "next/server";
import {
  FREE_QUOTA_LIMIT,
  getRemainingFreeQuota,
  recordFreeGenerationResult,
  reserveFreeGeneration,
} from "#/lib/free-quota";

type ServerThemeProvider = Exclude<ThemeProvider, "browser">;

const SERVER_PROVIDERS = PROVIDERS.filter(
  (provider): provider is ServerThemeProvider => provider !== "browser"
);

const FREE_MODEL = DEFAULT_MODELS.openai;
const MAX_PROMPT_LENGTH = 200;

export async function GET() {
  try {
    const remaining = await getRemainingFreeQuota();
    return NextResponse.json({
      model: FREE_MODEL,
      limit: FREE_QUOTA_LIMIT,
      remaining,
    });
  } catch (error) {
    console.error("無料枠の取得エラー:", error);
    return NextResponse.json(
      { error: "無料枠の残り回数を取得できませんでした" },
      { status: 500 }
    );
  }
}

async function generateWithFreeQuota(prompt: string) {
  const id = await reserveFreeGeneration(FREE_MODEL, prompt);
  if (id === undefined) {
    return NextResponse.json(
      {
        error: `無料枠は直近24時間で${FREE_QUOTA_LIMIT}回までです。時間をおくか、自分のAPIキーでお試しください。`,
      },
      { status: 429 }
    );
  }

  const client = new ThemeClient({ provider: "openai", model: FREE_MODEL });
  const result = await client.generateTheme(prompt);
  await recordFreeGenerationResult(id, result.type, result.CSSCode);
  const remaining = await getRemainingFreeQuota();

  return NextResponse.json({ ...result, remaining });
}

export async function POST(request: NextRequest) {
  try {
    const { model, prompt, apiKey, provider } = await request.json();

    if (typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json(
        { error: "プロンプトが必要です" },
        { status: 400 }
      );
    }

    if (!apiKey) {
      if (prompt.length > MAX_PROMPT_LENGTH) {
        return NextResponse.json(
          {
            error: `無料枠のプロンプトは${MAX_PROMPT_LENGTH}文字以内で入力してください`,
          },
          { status: 400 }
        );
      }
      return await generateWithFreeQuota(prompt);
    }

    if (!SERVER_PROVIDERS.includes(provider as ServerThemeProvider)) {
      return NextResponse.json(
        { error: `不明なプロバイダーです: ${provider}` },
        { status: 400 }
      );
    }

    const client = new ThemeClient({ provider, model, apiKey });
    const result = await client.generateTheme(prompt);

    return NextResponse.json(result);
  } catch (error) {
    console.error("テーマ生成エラー:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "不明なエラー" },
      { status: 500 }
    );
  }
}
