import { z } from "zod";

import { FONT_FAMILIES } from "./theme";

export type ThemeVariables = Record<
  | "--color-primary"
  | "--color-secondary"
  | "--color-background"
  | "--width-border"
  | "--size-radius"
  | "--font-family",
  string
>;

export const themeVariablesSchema: z.ZodType<ThemeVariables> = z.object({
  "--color-primary": z.string(),
  "--color-secondary": z.string(),
  "--color-background": z.string(),
  "--width-border": z.string(),
  "--size-radius": z.string(),
  "--font-family": z.enum(FONT_FAMILIES),
});
