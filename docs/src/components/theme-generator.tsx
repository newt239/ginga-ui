"use client";

import { useState } from "react";
import { Button, Input, Select } from "@ginga-ui/core";
import { ListBoxItem } from "react-aria-components";
import { CodeBlock } from "./code-block";
import styles from "./theme-generator.module.css";

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
      // サーバーサイドRoute Handlerを使用
      const response = await fetch("/api/generate-theme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          prompt,
          apiKey,
          provider,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "テーマ生成に失敗しました");
      }

      const result = await response.json();

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
    <div className={styles.container}>
      <div className={styles.warningBox}>
        <p className={styles.warningText}>
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
        <label htmlFor="api-key-input" className={styles.fieldLabel}>
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
        <label htmlFor="theme-prompt-input" className={styles.fieldLabel}>
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
        <div className={styles.errorBox}>
          <strong>エラー:</strong> {error}
        </div>
      )}

      {cssCode && (
        <div className={styles.resultContainer}>
          <h3 className={styles.resultTitle}>生成されたテーマ</h3>
          <p className={styles.resultDescription}>
            テーマがサイト全体に適用されました。ページをスクロールして変化を確認してください。
          </p>
          <CodeBlock code={cssCode} highlightedCode={`<pre>${cssCode}</pre>`} />
        </div>
      )}
    </div>
  );
}
