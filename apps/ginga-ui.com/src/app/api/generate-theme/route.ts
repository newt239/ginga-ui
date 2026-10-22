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

import type { ThemeApiError } from "#/lib/theme-api-error";

type ServerThemeProvider = Exclude<ThemeProvider, "browser">;

const SERVER_PROVIDERS = PROVIDERS.filter(
  (provider): provider is ServerThemeProvider => provider !== "browser"
);

const FREE_MODEL = DEFAULT_MODELS.openai;
const MAX_PROMPT_LENGTH = 200;

function errorResponse(error: ThemeApiError, status: number) {
  return NextResponse.json({ error }, { status });
}

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
    return errorResponse({ code: "quota-fetch-failed" }, 500);
  }
}

async function generateWithFreeQuota(prompt: string) {
  const id = await reserveFreeGeneration(FREE_MODEL, prompt);
  if (id === undefined) {
    return errorResponse(
      { code: "quota-exceeded", limit: FREE_QUOTA_LIMIT },
      429
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
      return errorResponse({ code: "missing-prompt" }, 400);
    }

    if (!apiKey) {
      if (prompt.length > MAX_PROMPT_LENGTH) {
        return errorResponse(
          { code: "prompt-too-long", max: MAX_PROMPT_LENGTH },
          400
        );
      }
      return await generateWithFreeQuota(prompt);
    }

    if (!SERVER_PROVIDERS.includes(provider as ServerThemeProvider)) {
      return errorResponse(
        { code: "unknown-provider", provider: String(provider) },
        400
      );
    }

    const client = new ThemeClient({ provider, model, apiKey });
    const result = await client.generateTheme(prompt);

    return NextResponse.json(result);
  } catch (error) {
    console.error("テーマ生成エラー:", error);
    return errorResponse(
      {
        code: "generation-failed",
        message: error instanceof Error ? error.message : undefined,
      },
      500
    );
  }
}
