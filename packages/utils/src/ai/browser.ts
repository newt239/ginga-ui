export type BrowserAIAvailability =
  | "unavailable"
  | "downloadable"
  | "downloading"
  | "available";

export async function getBrowserAIAvailability(): Promise<BrowserAIAvailability> {
  if (typeof window === "undefined") {
    return "unavailable";
  }

  const { doesBrowserSupportBrowserAI, browserAI } =
    await import("@browser-ai/core");

  if (!doesBrowserSupportBrowserAI()) {
    return "unavailable";
  }

  return browserAI("text").availability();
}
