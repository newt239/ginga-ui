import { z } from "zod";
export declare const themeVariablesSchema: z.ZodObject<{
    "--color-primary": z.ZodString;
    "--color-secondary": z.ZodString;
    "--color-background": z.ZodString;
    "--width-border": z.ZodString;
    "--size-radius": z.ZodString;
    "--font-family": z.ZodString;
}, z.core.$strip>;
export type ThemeVariables = z.infer<typeof themeVariablesSchema>;
