"use client";

import { useEffect, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  FormControl,
  Input,
  Select,
  SelectItem,
} from "@ginga-ui/core";
import type { BrowserAIAvailability, ThemeProvider } from "@ginga-ui/utils";
import { CircleAlert, Info, TriangleAlert } from "lucide-react";
import { CodeBlock } from "./code-block";
import styles from "./theme-generator.module.css";

type ServerThemeProvider = Exclude<ThemeProvider, "browser">;

const MODELS: Record<ServerThemeProvider, string[]> = {
  openai: ["gpt-5.6-luna", "gpt-5.6-terra", "gpt-5.6-sol"],
  google: ["gemini-3.7-flash", "gemini-3.5-flash-lite", "gemini-2.5-pro"],
  anthropic: ["claude-haiku-4-5", "claude-sonnet-5", "claude-opus-5"],
};

const AVAILABILITY_MESSAGES: Record<BrowserAIAvailability, string> = {
  unavailable:
    "このブラウザではGemini Nanoを利用できません。デスクトップ版のChromeまたはEdgeでお試しください。",
  downloadable:
    "初回生成時にGemini Nanoのモデルがダウンロードされます。数GBの通信が発生し、完了までに時間がかかります。",
  downloading: "Gemini Nanoのモデルをダウンロード中です。",
  available: "Gemini Nanoが利用可能です。APIキーもサーバー通信も不要です。",
};

type GenerateResult = { type: "success" | "error"; CSSCode: string };

export function ThemeGenerator() {
  const [provider, setProvider] = useState<ThemeProvider>("openai");
  const [model, setModel] = useState(MODELS.openai[0]);
  const [apiKey, setApiKey] = useState("");
  const [prompt, setPrompt] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [availability, setAvailability] =
    useState<BrowserAIAvailability | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  const isBrowserProvider = provider === "browser";

  useEffect(() => {
    if (!isBrowserProvider || availability !== null) {
      return;
    }

    let cancelled = false;

    void (async () => {
      const { getBrowserAIAvailability } = await import("@ginga-ui/utils");
      const result = await getBrowserAIAvailability();
      if (!cancelled) {
        setAvailability(result);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isBrowserProvider, availability]);

  const generateInBrowser = async (): Promise<GenerateResult> => {
    const { ThemeClient } = await import("@ginga-ui/utils");
    const client = new ThemeClient({ provider: "browser" });

    return client.generateTheme(prompt, {
      onDownloadProgress: (progress) =>
        setDownloadProgress(progress < 1 ? Math.round(progress * 100) : null),
    });
  };

  const generateOnServer = async (): Promise<GenerateResult> => {
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

    return response.json();
  };

  const handleGenerate = async () => {
    if (!prompt || (!isBrowserProvider && !apiKey)) {
      setError(
        isBrowserProvider
          ? "プロンプトを入力してください"
          : "APIキーとプロンプトを入力してください"
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = isBrowserProvider
        ? await generateInBrowser()
        : await generateOnServer();

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
      setDownloadProgress(null);
    }
  };

  const handleProviderChange = (newProvider: ThemeProvider) => {
    setProvider(newProvider);
    if (newProvider !== "browser") {
      setModel(MODELS[newProvider][0]);
    }
  };

  const buttonLabel = () => {
    if (!loading) {
      return "テーマを生成";
    }
    return downloadProgress === null
      ? "生成中..."
      : `モデルをダウンロード中... ${downloadProgress}%`;
  };

  return (
    <div className={styles.container}>
      {isBrowserProvider ? (
        <Alert variant="info" icon={<Info />}>
          <AlertTitle>ブラウザ内で完結します</AlertTitle>
          <AlertDescription>
            Gemini
            Nanoを使うため、APIキーの入力もサーバーへの通信も不要です。生成はすべて端末上で実行されます。
          </AlertDescription>
        </Alert>
      ) : (
        <Alert variant="warning" icon={<TriangleAlert />}>
          <AlertTitle>セキュリティ上の注意</AlertTitle>
          <AlertDescription>
            このデモで入力したAPIキーはサーバーサイドのRoute
            Handlerへ送信され、テーマ生成にのみ使用されます。保存はされません。本番環境ではAPIキーをクライアントから受け取らず、サーバーサイドの環境変数から読み込んでください。
          </AlertDescription>
        </Alert>
      )}

      <Select
        label="LLMプロバイダー"
        selectedKey={provider}
        onSelectionChange={(key) => handleProviderChange(key as ThemeProvider)}
      >
        <SelectItem id="openai">OpenAI</SelectItem>
        <SelectItem id="google">Google Gemini</SelectItem>
        <SelectItem id="anthropic">Anthropic Claude</SelectItem>
        <SelectItem id="browser">Gemini Nano</SelectItem>
      </Select>

      {isBrowserProvider ? (
        availability && (
          <Alert
            variant={availability === "unavailable" ? "warning" : "info"}
            icon={availability === "unavailable" ? <TriangleAlert /> : <Info />}
          >
            <AlertDescription>
              {AVAILABILITY_MESSAGES[availability]}
            </AlertDescription>
          </Alert>
        )
      ) : (
        <>
          <Select
            label="モデル"
            selectedKey={model}
            onSelectionChange={(key) => setModel(key as string)}
          >
            {MODELS[provider].map((m) => (
              <SelectItem key={m} id={m}>
                {m}
              </SelectItem>
            ))}
          </Select>

          <FormControl
            title="APIキー"
            htmlFor="api-key-input"
            className={styles.field}
          >
            <Input
              id="api-key-input"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
            />
          </FormControl>
        </>
      )}

      <FormControl
        title="テーマプロンプト"
        htmlFor="theme-prompt-input"
        className={styles.field}
      >
        <Input
          id="theme-prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="例: 森の中の静けさ、サイバーパンク、ダークモード"
        />
      </FormControl>

      <Button
        variant="filled"
        size="lg"
        className={styles.submit}
        onPress={handleGenerate}
        disabled={
          !prompt ||
          loading ||
          (isBrowserProvider ? availability === "unavailable" : !apiKey)
        }
      >
        {buttonLabel()}
      </Button>

      {error && (
        <Alert variant="danger" icon={<CircleAlert />} role="alert">
          <AlertTitle>エラー</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {cssCode && (
        <div className={styles.resultContainer}>
          <h3 className={styles.resultTitle}>生成されたテーマ</h3>
          <p className={styles.resultDescription}>
            テーマがサイト全体に適用されました。ページをスクロールして変化を確認してください。
          </p>
          <CodeBlock code={cssCode} />
        </div>
      )}
    </div>
  );
}
