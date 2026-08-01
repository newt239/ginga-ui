import { type ThemeVariables } from "./schema";
export type ThemeClientConstructorProps = {
    model?: string;
};
export type GenerateThemeOptions = {
    maxRetries?: number;
};
export declare class ThemeClient {
    private model;
    private maxRetries;
    constructor({ model }: ThemeClientConstructorProps);
    private getProvider;
    generateTheme(prompt: string, options?: GenerateThemeOptions): Promise<{
        readonly type: "success";
        readonly CSSCode: string;
    } | {
        readonly type: "error";
        readonly CSSCode: string;
    }>;
    enforceContrast(baseColor: string, targetColor: string): string;
    adaptNewTheme(variables: ThemeVariables): string;
}
