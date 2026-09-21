import { PROVIDERS, ThemeClient, type ThemeProvider } from "@ginga-ui/utils";
import { NextRequest, NextResponse } from "next/server";

type ServerThemeProvider = Exclude<ThemeProvider, "browser">;

const SERVER_PROVIDERS = PROVIDERS.filter(
  (provider): provider is ServerThemeProvider => provider !== "browser"
);

export async function POST(request: NextRequest) {
  try {
    const { model, prompt, apiKey, provider } = await request.json();

    if (!apiKey || !prompt) {
      return NextResponse.json(
        { error: "APIキーとプロンプトが必要です" },
        { status: 400 }
      );
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
