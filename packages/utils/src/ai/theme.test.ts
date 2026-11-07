import { describe, expect, it } from "vitest";

import {
  buildSystemPrompt,
  buildThemeCSS,
  checkConstraints,
  contrastRatio,
  generateColorScale,
  parseColor,
  repairConstraints,
  THEME_CONSTRAINTS,
  THEME_VARIABLES,
  validateThemeValues,
} from "./theme";

import type { ThemeConstraint, ThemeVariable } from "./theme";

const colorVariable: ThemeVariable = {
  name: "--bg",
  description: "Page background color",
  defaultValue: "0.982 0.014 70",
};

const numberVariable: ThemeVariable = {
  name: "--radius",
  description: "Corner radius",
  defaultValue: "1",
  kind: "number",
  min: 0,
  max: 2,
  unit: "rem",
};

const enumVariable: ThemeVariable = {
  name: "--font",
  description: "Font family",
  defaultValue: "sans-serif",
  kind: "enum",
  allowedValues: ["sans-serif", "serif"],
};

const textOnBg: ThemeConstraint = {
  type: "contrast",
  foreground: "--text",
  background: "--bg",
  min: 4.5,
};

const ratioOf = (a: string, b: string) => {
  const x = parseColor(a);
  const y = parseColor(b);
  if (!x || !y) {
    throw new Error("invalid color");
  }
  return contrastRatio(x, y);
};

describe("buildSystemPrompt", () => {
  it("変数の表に種類と候補が含まれる", () => {
    const prompt = buildSystemPrompt([
      colorVariable,
      numberVariable,
      enumVariable,
    ]);
    expect(prompt).toContain(
      "| --radius | Corner radius | number (0–2) | - | 1 |"
    );
    expect(prompt).toContain("`sans-serif` / `serif`");
  });

  it("各行が改行1つで区切られ表が途切れない", () => {
    const prompt = buildSystemPrompt(THEME_VARIABLES);
    expect(prompt).not.toMatch(/\|\n\n\|/);
  });

  it("制約が読みやすさのルールとして含まれる", () => {
    const prompt = buildSystemPrompt(THEME_VARIABLES, THEME_CONSTRAINTS);
    expect(prompt).toContain("at least 4.5:1");
  });
});

describe("validateThemeValues", () => {
  it("妥当な値はそのまま返される", () => {
    expect(
      validateThemeValues([colorVariable, numberVariable, enumVariable], {
        "--bg": "0.55 0.17 255",
        "--radius": "0.5",
        "--font": "serif",
      })
    ).toEqual({
      "--bg": "0.55 0.17 255",
      "--radius": "0.5",
      "--font": "serif",
    });
  });

  it("OKLCH の形式でない色は既定値に落とされる", () => {
    for (const value of [
      "#ff0000",
      "oklch(0.5 0.1 200)",
      "transparent",
      "1.5 0.1 200",
    ]) {
      expect(validateThemeValues([colorVariable], { "--bg": value })).toEqual({
        "--bg": "0.982 0.014 70",
      });
    }
  });

  it("単位付きや範囲外の数値は既定値に落とされる", () => {
    for (const value of ["1rem", "5", "-1", "NaN", "1e1"]) {
      expect(
        validateThemeValues([numberVariable], { "--radius": value })
      ).toEqual({
        "--radius": "1",
      });
    }
  });

  it("候補にない値は既定値に落とされる", () => {
    expect(
      validateThemeValues([enumVariable], {
        "--font": "sans-serif; } body { display: none } :root {",
      })
    ).toEqual({ "--font": "sans-serif" });
  });

  it("値が欠けている場合も既定値で補われる", () => {
    expect(validateThemeValues([colorVariable, numberVariable], {})).toEqual({
      "--bg": "0.982 0.014 70",
      "--radius": "1",
    });
  });
});

describe("checkConstraints", () => {
  it("コントラスト不足を検出する", () => {
    const [violation] = checkConstraints([textOnBg], {
      "--text": "0.95 0.01 70",
      "--bg": "0.93 0.01 70",
    });
    expect(violation).toContain("4.5:1");
  });

  it("違反がなければ空になる", () => {
    expect(
      checkConstraints([textOnBg], { "--text": "0 0 0", "--bg": "1 0 0" })
    ).toEqual([]);
  });
});

describe("repairConstraints", () => {
  it.each([
    ["0.7 0 0", "0.75 0 0"],
    ["0.65 0 0", "0.6 0 0"],
    ["0.82 0 0", "1 0 0"],
    ["0.5 0.1 200", "0.55 0.12 30"],
  ])("背景 %s と文字 %s でも基準を満たすよう補正する", (bg, text) => {
    const repaired = repairConstraints([textOnBg], {
      "--bg": bg,
      "--text": text,
    });
    expect(ratioOf(repaired["--text"], bg)).toBeGreaterThanOrEqual(4.5);
    expect(checkConstraints([textOnBg], repaired)).toEqual([]);
  });

  it("補正は色相を保ったまま明度を動かす", () => {
    const repaired = repairConstraints([textOnBg], {
      "--text": "0.8 0.08 255",
      "--bg": "0.93 0.01 70",
    });
    const [lightness, , hue] = repaired["--text"].split(" ").map(Number);
    expect(hue).toBeCloseTo(255, 0);
    expect(lightness).toBeLessThan(0.8);
  });

  it("すでに満たしている値は変更されない", () => {
    const values = { "--text": "0 0 0", "--bg": "1 0 0" };
    expect(repairConstraints([textOnBg], values)).toEqual(values);
  });
});

describe("generateColorScale", () => {
  it("背景と同じ色を含まず、末尾が元の色になる 10 段階を返す", () => {
    const scale = generateColorScale("1 0 0", "0.5987 0.2194 259.04");
    expect(scale).toHaveLength(10);
    expect(scale[0]).not.toBe("1 0 0");
    const [l, c, h] = scale[9].split(" ").map(Number);
    expect(l).toBeCloseTo(0.5987, 3);
    expect(c).toBeCloseTo(0.2194, 3);
    expect(h).toBeCloseTo(259.04, 1);
  });
});

describe("buildThemeCSS", () => {
  const defaults = validateThemeValues(THEME_VARIABLES, {});

  it("色を oklch()、寸法を rem で出力する", () => {
    const css = buildThemeCSS(THEME_VARIABLES, defaults);
    expect(css).toContain("--color-primary: oklch(0.5987 0.2194 259.04);");
    expect(css).toContain("--width-border: 0.125rem;");
    expect(css).toContain("--size-radius: 1rem;");
    expect(css).toContain("--font-family: sans-serif;");
    expect(css).toContain("--color-secondary-9:");
    expect(css).toContain("color-scheme: light;");
  });

  it("暗い背景では color-scheme が dark になる", () => {
    const css = buildThemeCSS(THEME_VARIABLES, {
      ...defaults,
      "--color-background": "0.2 0.02 250",
    });
    expect(css).toContain("color-scheme: dark;");
  });

  it("不正な生成値を通しても :root の外に抜けない", () => {
    const values = validateThemeValues(THEME_VARIABLES, {
      "--font-family": "x; } body { display: none } :root {",
      "--size-radius": "1rem; } * { color: red",
      "--color-primary": "0.5 0.1 200; } a {",
    });
    const css = buildThemeCSS(THEME_VARIABLES, values);
    expect(css.match(/[{}]/g)).toEqual(["{", "}"]);
  });
});
