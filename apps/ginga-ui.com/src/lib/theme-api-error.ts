import type { Dictionary } from "#/i18n/dictionaries";

export type ThemeApiError =
  | { code: "quota-fetch-failed" }
  | { code: "quota-exceeded"; limit: number }
  | { code: "missing-prompt" }
  | { code: "prompt-too-long"; max: number }
  | { code: "unknown-provider"; provider: string }
  | { code: "generation-failed"; message?: string };

export function formatThemeApiError(
  error: ThemeApiError,
  { errors }: Dictionary["themeGenerator"]
) {
  switch (error.code) {
    case "quota-fetch-failed":
      return errors.quotaFetchFailed;
    case "quota-exceeded":
      return errors.quotaExceeded(error.limit);
    case "missing-prompt":
      return errors.missingPrompt;
    case "prompt-too-long":
      return errors.promptTooLong(error.max);
    case "unknown-provider":
      return errors.unknownProvider(error.provider);
    case "generation-failed":
      return error.message ?? errors.generationFailed;
  }
}
