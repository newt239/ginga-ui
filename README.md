# Ginga UI

[![NPM Version](https://img.shields.io/npm/v/%40ginga-ui%2Fcore)](https://www.npmjs.com/package/@ginga-ui/core)
![GitHub License](https://img.shields.io/github/license/newt239/ginga-ui)
[![Codecheck](https://github.com/newt239/ginga-ui/actions/workflows/codecheck.yaml/badge.svg)](https://github.com/newt239/ginga-ui/actions/workflows/codecheck.yaml)
[![Publish to npm](https://github.com/newt239/ginga-ui/actions/workflows/release.yaml/badge.svg)](https://github.com/newt239/ginga-ui/actions/workflows/publish.yaml)

**Ginga UI** is an UI component library for React. This libarary is using LLM to styling components. Components will design based on the Website contents or user's prompt.

> **Ginga** (/ɡiɴɡa/) is a Japanese word meaning "galaxy".

## Recommended Environment

### Frameworks

- React 18 or later
- Next.js 13 or later (Recommended to use with App Router)
- React Router v7
- React with Vite

### Browsers

- Chrome on macOS, Windows, and Android
- Firefox on macOS and Windows
- Safari on macOS, iOS, and iPadOS
- Edge (chromium) on Windows

## Installation

### 1. Install the package

```bash
npm install @ginga-ui/core
```

### 2. Import CSS file on root component

If you are using Next.js App Router, you can import CSS files in the `layout.tsx` file.

```tsx
import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";
```

### 3. Import components

```tsx
import { Button } from "@ginga-ui/core";

const CustomButton = () => {
  return <Button>Button</Button>;
};

export default CustomButton;
```

## Theme Generation

You can generate with your own theme by using `ThemeClient` class powered by [Vercel AI SDK](https://sdk.vercel.ai/).

### Environment Variables

`ThemeClient` uses Vercel AI SDK to generate themes. The SDK automatically reads API keys from environment variables:

- OpenAI: `OPENAI_API_KEY`
- Anthropic: `ANTHROPIC_API_KEY`
- Google: `GOOGLE_API_KEY` or `GOOGLE_GENERATIVE_AI_API_KEY`

Set these environment variables in your `.env` file or deployment environment.

### Basic Usage

```tsx
import { ThemeClient } from "@ginga-ui/core";

const themeClient = new ThemeClient({
  model: "gpt-4o-mini", // Specify the model name
});

const CustomButton = () => {
  const handleClick = async () => {
    await themeClient.generateTheme("the image of you thought");
  };

  return <Button onClick={handleClick}>Button</Button>;
};

export default CustomButton;
```

### SSR Mode (Recommended)

If you want to generate theme on server side, you can write like this. Recommended to use with Next.js App Router.

```tsx
import { Button, ThemeClient } from "@ginga-ui/core";

export default async function Home() {
  const themeClient = new ThemeClient({
    model: "gpt-4o-mini",
  });

  const { CSSCode } = await themeClient.generateTheme("fairy tale");

  return (
    <div>
      <style>{CSSCode}</style>
      <Button>Button</Button>
    </div>
  );
}
```

### Supported Models

`ThemeClient` automatically detects the provider based on the model name prefix:

- **OpenAI**: Models starting with `gpt-` or `o1-` (e.g., `gpt-4o`, `gpt-4o-mini`, `o1`)
- **Anthropic**: Models starting with `claude-` (e.g., `claude-3-7-sonnet-latest`, `claude-3-5-sonnet-latest`)
- **Google**: Models starting with `gemini-` (e.g., `gemini-2.0-flash-exp`, `gemini-1.5-pro`)

You can use any model supported by the [Vercel AI SDK](https://sdk.vercel.ai/providers/ai-sdk-providers).

#### Examples

```tsx
// OpenAI
const themeClient = new ThemeClient({
  model: "gpt-4o-mini",
});

// Anthropic
const themeClient = new ThemeClient({
  model: "claude-3-7-sonnet-latest",
});

// Google Gemini
const themeClient = new ThemeClient({
  model: "gemini-2.0-flash-exp",
});
```

### `ThemeClient` Constructor Options

| Name    | Description                                                                           | Default Value   | Required |
| ------- | ------------------------------------------------------------------------------------- | --------------- | -------- |
| `model` | Model name to use for theme generation. Provider is automatically detected from name. | `"gpt-4o-mini"` | No       |

## Variables

All generated design are delivered by CSS variables. You can use these variables on your own CSS.

| Name                 | Description      | Default Value |
| -------------------- | ---------------- | ------------- |
| `--color-primary`    | Accent color     | #1677ff       |
| `--color-secondary`  | Main text color  | #000000       |
| `--color-background` | Background color | #ffffff       |
| `--width-border`     | Border width     | 2px           |
| `--size-radius`      | Border radius    | 1rem          |
| `--font-family`      | Font family      | sans-serif    |

Additionaly, `--color-primary` and `--color-secondary` are generated more variants. This is color scales with `--color-background`. Here are initial values.

```css
:root {
  --color-primary: #1677ff;
  --color-primary-0: #e3f4ff;
  --color-primary-1: #cce4ff;
  --color-primary-2: #99c5ff;
  --color-primary-3: #63a5ff;
  --color-primary-4: #3689ff;
  --color-primary-5: #1878ff;
  --color-primary-6: #006fff;
  --color-primary-7: #005ee5;
  --color-primary-8: #0054ce;
  --color-primary-9: #0048b6;
  --color-secondary: #000;
  --color-secondary-0: #f8f9fa;
  --color-secondary-1: #f1f3f5;
  --color-secondary-2: #e9ecef;
  --color-secondary-3: #dee2e6;
  --color-secondary-4: #ced4da;
  --color-secondary-5: #adb5bd;
  --color-secondary-6: #868e96;
  --color-secondary-7: #495057;
  --color-secondary-8: #343a40;
  --color-secondary-9: #212529;
  --color-white: #fff;
  --color-black: #000;
  --color-background: #fff;
}
```

## Components

Usage of components can be found in the [Storybook](https://6756fb8efde357469ac062e5-tlboxkojjq.chromatic.com/).

- Accordion
- Anchor
- Box
- Button
- Card
- Checkbox
- Dialog
- FormControl
- Heading
- Image
- Input
- List
- Paragraph
- Radio
- Select
- Slider
- Switch
- Tab
- Table
