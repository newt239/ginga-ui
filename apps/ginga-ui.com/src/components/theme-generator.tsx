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
import { CircleAlert, Info, Sparkles, TriangleAlert } from "lucide-react";
import { useDictionary } from "#/i18n/locale-context";
import { formatThemeApiError } from "#/lib/theme-api-error";
import { CodeBlock } from "./code-block";
import styles from "./theme-generator.module.css";

type ServerThemeProvider = Exclude<ThemeProvider, "browser">;

type GenerationMode = "free" | "own-key" | "browser";

const MODELS: Record<ServerThemeProvider, string[]> = {
  openai: ["gpt-6-luna", "gpt-6.1-sol", "gpt-6-astra"],
  google: ["gemini-3.8-flash", "gemini-3.5-flash-lite", "gemini-4-argon"],
  anthropic: ["claude-haiku-5-5", "claude-sonnet-5-5", "claude-opus-5-5"],
};

const FREE_PROMPT_MAX_LENGTH = 200;

type GenerateResult = {
  type: "success" | "error";
  CSSCode: string;
  remaining?: number;
};

type FreeQuota = { model: string; limit: number; remaining: number };

export function ThemeGenerator() {
  const { themeGenerator: t } = useDictionary();
  const [mode, setMode] = useState<GenerationMode>("free");
  const [provider, setProvider] = useState<ServerThemeProvider>("openai");
  const [model, setModel] = useState(MODELS.openai[0]);
  const [apiKey, setApiKey] = useState("");
  const [prompt, setPrompt] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [availability, setAvailability] =
    useState<BrowserAIAvailability | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [freeQuota, setFreeQuota] = useState<FreeQuota | null>(null);

  const isBrowserProvider = mode === "browser";
  const isFreeMode = mode === "free";

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      const response = await fetch("/api/generate-theme");
      if (!response.ok || cancelled) {
        return;
      }
      setFreeQuota(await response.json());
    })();

    return () => {
      cancelled = true;
    };
  }, []);

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
      body: JSON.stringify(
        isFreeMode ? { prompt } : { model, prompt, apiKey, provider }
      ),
    });

    if (response.status === 429) {
      setFreeQuota((current) =>
        current ? { ...current, remaining: 0 } : current
      );
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error
          ? formatThemeApiError(errorData.error, t)
          : t.errors.generationFailed
      );
    }

    return response.json();
  };

  const handleGenerate = async () => {
    if (!prompt || (mode === "own-key" && !apiKey)) {
      setError(
        mode === "own-key"
          ? t.errors.missingApiKeyAndPrompt
          : t.errors.missingPrompt
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = isBrowserProvider
        ? await generateInBrowser()
        : await generateOnServer();

      if (result.remaining !== undefined) {
        setFreeQuota((current) =>
          current ? { ...current, remaining: result.remaining ?? 0 } : current
        );
      }

      if (result.type === "success") {
        setCssCode(result.CSSCode);

        const styleEl = document.getElementById("dynamic-theme");
        if (styleEl) {
          styleEl.textContent = result.CSSCode;
        }
      } else {
        setError(result.CSSCode);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : t.errors.generationFailed);
    } finally {
      setLoading(false);
      setDownloadProgress(null);
    }
  };

  const handleProviderChange = (newProvider: ServerThemeProvider) => {
    setProvider(newProvider);
    setModel(MODELS[newProvider][0]);
  };

  const isUnavailable = () => {
    switch (mode) {
      case "free":
        return freeQuota?.remaining === 0;
      case "own-key":
        return !apiKey;
      case "browser":
        return availability === "unavailable";
    }
  };

  const buttonLabel = () => {
    if (!loading) {
      return t.generate;
    }
    return downloadProgress === null
      ? t.generating
      : t.downloading(downloadProgress);
  };

  return (
    <div className={styles.container}>
      <Select
        label={t.mode}
        selectedKey={mode}
        onSelectionChange={(key) => setMode(key as GenerationMode)}
      >
        <SelectItem id="free">{t.modeFree}</SelectItem>
        <SelectItem id="own-key">{t.modeOwnKey}</SelectItem>
        <SelectItem id="browser">Gemini Nano</SelectItem>
      </Select>

      {mode === "free" && (
        <Alert
          variant={freeQuota?.remaining === 0 ? "warning" : "info"}
          icon={freeQuota?.remaining === 0 ? <TriangleAlert /> : <Info />}
        >
          <AlertTitle>{t.freeTitle}</AlertTitle>
          <AlertDescription>
            {t.freeDescription(freeQuota?.model, freeQuota?.limit ?? 100)}
            {freeQuota && t.freeRemaining(freeQuota.remaining)}
          </AlertDescription>
        </Alert>
      )}

      {mode === "own-key" && (
        <>
          <Alert variant="warning" icon={<TriangleAlert />}>
            <AlertTitle>{t.securityTitle}</AlertTitle>
            <AlertDescription>{t.securityDescription}</AlertDescription>
          </Alert>

          <Select
            label={t.provider}
            selectedKey={provider}
            onSelectionChange={(key) =>
              handleProviderChange(key as ServerThemeProvider)
            }
          >
            <SelectItem id="openai">OpenAI</SelectItem>
            <SelectItem id="google">Google Gemini</SelectItem>
            <SelectItem id="anthropic">Anthropic Claude</SelectItem>
          </Select>

          <Select
            label={t.model}
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
            title={t.apiKey}
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

      {mode === "browser" && (
        <>
          <Alert variant="info" icon={<Info />}>
            <AlertTitle>{t.browserTitle}</AlertTitle>
            <AlertDescription>{t.browserDescription}</AlertDescription>
          </Alert>
          {availability && (
            <Alert
              variant={availability === "unavailable" ? "warning" : "info"}
              icon={
                availability === "unavailable" ? <TriangleAlert /> : <Info />
              }
            >
              <AlertDescription>
                {t.availability[availability]}
              </AlertDescription>
            </Alert>
          )}
        </>
      )}

      <FormControl
        title={t.prompt}
        htmlFor="theme-prompt-input"
        className={styles.field}
      >
        <Input
          id="theme-prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t.promptPlaceholder}
          maxLength={isFreeMode ? FREE_PROMPT_MAX_LENGTH : undefined}
        />
      </FormControl>

      <Button
        variant="filled"
        size="lg"
        className={styles.submit}
        startIcon={<Sparkles />}
        onPress={handleGenerate}
        disabled={!prompt || loading || isUnavailable()}
      >
        {buttonLabel()}
      </Button>

      {error && (
        <Alert variant="danger" icon={<CircleAlert />} role="alert">
          <AlertTitle>{t.error}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {cssCode && (
        <div className={styles.resultContainer}>
          <h3 className={styles.resultTitle}>{t.resultTitle}</h3>
          <p className={styles.resultDescription}>{t.resultDescription}</p>
          <CodeBlock code={cssCode} />
        </div>
      )}
    </div>
  );
}
