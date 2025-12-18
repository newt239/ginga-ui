"use client";

import { useState } from "react";
import { Button, Input, Select } from "@ginga-ui/core";
import { ThemeClient } from "@ginga-ui/core";
import { ListBoxItem } from "react-aria-components";
import { CodeBlock } from "./code-block";

type ThemeProvider = "openai" | "google" | "anthropic";

const MODELS: Record<ThemeProvider, string[]> = {
  openai: ["gpt-4o-mini", "gpt-4o"],
  google: ["gemini-exp-1206", "gemini-2.0-flash-exp"],
  anthropic: ["claude-3-7-sonnet-latest", "claude-3-5-sonnet-20241022"],
};

export function ThemeGenerator() {
  const [provider, setProvider] = useState<ThemeProvider>("openai");
  const [model, setModel] = useState(MODELS.openai[0]);
  const [apiKey, setApiKey] = useState("");
  const [prompt, setPrompt] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!apiKey || !prompt) {
      setError("APIキーとプロンプトを入力してください");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 環境変数にAPIキーを設定（クライアントサイド）
      const envKey =
        provider === "openai"
          ? "OPENAI_API_KEY"
          : provider === "google"
            ? "GOOGLE_GENERATIVE_AI_API_KEY"
            : "ANTHROPIC_API_KEY";

      // 注意: 本番環境ではサーバーサイドRoute Handlerを使用すべき
      process.env[envKey] = apiKey;

      const client = new ThemeClient({ model });
      const result = await client.generateTheme(prompt);

      if (result.type === "success") {
        setCssCode(result.CSSCode);

        // DOMに適用
        const styleEl = document.getElementById("dynamic-theme");
        if (styleEl) {
          styleEl.textContent = result.CSSCode;
        }
      } else {
        setError(result.CSSCode);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "テーマ生成に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  const handleProviderChange = (newProvider: ThemeProvider) => {
    setProvider(newProvider);
    setModel(MODELS[newProvider][0]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "800px",
      }}
    >
      <div
        style={{
          padding: "1rem",
          backgroundColor: "var(--color-primary-1)",
          border: "1px solid var(--color-primary-3)",
          borderRadius: "var(--size-radius)",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.6 }}>
          ⚠️
          <strong>セキュリティ上の注意:</strong>
          このデモではクライアントサイドでAPI呼び出しを行うため、APIキーがブラウザに露出します。本番環境では必ずサーバーサイドRoute
          Handlerを使用してください。
        </p>
      </div>

      <Select
        label="LLMプロバイダー"
        selectedKey={provider}
        onSelectionChange={(key) => handleProviderChange(key as ThemeProvider)}
      >
        <ListBoxItem id="openai">OpenAI</ListBoxItem>
        <ListBoxItem id="google">Google Gemini</ListBoxItem>
        <ListBoxItem id="anthropic">Anthropic Claude</ListBoxItem>
      </Select>

      <Select
        label="モデル"
        selectedKey={model}
        onSelectionChange={(key) => setModel(key as string)}
      >
        {MODELS[provider].map((m) => (
          <ListBoxItem key={m} id={m}>
            {m}
          </ListBoxItem>
        ))}
      </Select>

      <div>
        <label
          htmlFor="api-key-input"
          style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: 600,
            fontSize: "0.9375rem",
          }}
        >
          APIキー
        </label>
        <Input
          id="api-key-input"
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="sk-..."
        />
      </div>

      <div>
        <label
          htmlFor="theme-prompt-input"
          style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: 600,
            fontSize: "0.9375rem",
          }}
        >
          テーマプロンプト
        </label>
        <Input
          id="theme-prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="例: 森の中の静けさ、サイバーパンク、ダークモード"
        />
      </div>

      <Button
        variant="filled"
        onPress={handleGenerate}
        disabled={!apiKey || !prompt || loading}
      >
        {loading ? "生成中..." : "テーマを生成"}
      </Button>

      {error && (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "var(--color-primary-1)",
            border: "1px solid var(--color-primary)",
            borderRadius: "var(--size-radius)",
            color: "var(--color-primary)",
          }}
        >
          <strong>エラー:</strong> {error}
        </div>
      )}

      {cssCode && (
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ marginBottom: "1rem" }}>生成されたテーマ</h3>
          <p style={{ marginBottom: "1rem" }}>
            テーマがサイト全体に適用されました。ページをスクロールして変化を確認してください。
          </p>
          <CodeBlock code={cssCode} highlightedCode={`<pre>${cssCode}</pre>`} />
        </div>
      )}
    </div>
  );
}
