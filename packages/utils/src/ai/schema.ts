import { z } from "zod";

export const themeVariablesSchema = z.object({
  "--color-primary": z.string().describe("Accent color"),
  "--color-secondary": z.string().describe("Main text color"),
  "--color-background": z.string().describe("Background color"),
  "--width-border": z.string().describe("Border width"),
  "--size-radius": z.string().describe("Border radius"),
  "--font-family": z.string().describe("Font family"),
});

export type ThemeVariables = z.infer<typeof themeVariablesSchema>;
