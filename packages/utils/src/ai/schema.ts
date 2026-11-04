import { z } from "zod";

type ThemeVariablesShape = Record<
  | "--color-primary"
  | "--color-secondary"
  | "--color-background"
  | "--width-border"
  | "--size-radius"
  | "--font-family",
  z.ZodString
>;

export const themeVariablesSchema: z.ZodObject<ThemeVariablesShape> = z.object({
  "--color-primary": z.string().describe("Accent color"),
  "--color-secondary": z.string().describe("Main text color"),
  "--color-background": z.string().describe("Background color"),
  "--width-border": z.string().describe("Border width"),
  "--size-radius": z.string().describe("Border radius"),
  "--font-family": z.string().describe("Font family"),
});

export type ThemeVariables = z.infer<typeof themeVariablesSchema>;
