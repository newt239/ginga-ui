# Ginga UI

![version](https://img.shields.io/github/package-json/v/newt239/ginga-ui?style=flat)

**Ginga UI** is an UI component library for React. This libarary is using LLM to styling components. Components will design based on the Website contents or user's prompt.

## Recommended Environment

### Frameworks

- React 18
- Next.js 13 or Next.js 14 with App Router (not supported with Next.js 15)
- React with Vite

### Browsers

- Chrome on macOS, Windows, and Android
- Firefox on macOS and Windows
- Safari on macOS, iOS, and iPadOS
- Edge (chromium) on Windows

## Installation

### 1. Install the package

```bash
npm install ginga-ui
```

### 2. Import CSS file on root component

If you are using Next.js App Router, you can import CSS files in the `layout.tsx` file.

```jsx
import "ginga-ui/style.css";
import "ginga-ui/variables.css";
```

### 3. Import components

```jsx
import { Button } from "ginga-ui/core";

const ThemeGenerationButton = () => {
  return <Button>Button</Button>;
};

export default ThemeGenerationButton;
```

## Theme Generation

You can generate with your own theme by using `ThemeClient` class.

```jsx
import ThemeClient from "ginga-ui/ai";

const themeClient = new ThemeClient({
  clientType: "openai",
  apiKey: "YOUR_OPENAI_API_KEY",
});

const handleClick = async () => {
  await themeClient.generateTheme("the image of you thought");
};

const ThemeGenerationButton = () => {
  return <Button onClick={handleClick}>Button</Button>;
};

export default ThemeGenerationButton;
```

If you want to call on client side, you can use `dangerouslyAllowBrowser` option.

```jsx
const themeClient = new ThemeClient({
  clientType: "openai",
  apiKey: "YOUR_OPENAI_API_KEY",
  dangerouslyAllowBrowser: true,
});

const handleClick = async () => {
  await themeClient.generateTheme("the image of you thought");
};
```

### SSR Mode

If you want to generate theme on server side, you can write like this. Recommended to use with Next.js App Router and write this on page component.

```jsx
import { Button } from "ginga-ui/core";
import ThemeClient from "ginga-ui/ai";

export default async function Home() {
  const themeClient = new ThemeClient({
    clientType: "openai",
    apiKey: process.env.OPENAI_API_KEY!,
  });

  const { CSSCode } = await themeClient.generateTheme("fairy tale");

  return (
    <div>
      <style>{CSSCode}</style>
      <Button>aaas</Button>
    </div>
  );
}
```

### Client Types

`ThemeClient` supports two client types: `gemini` and `openai`. You can specify the client type when creating an instance of `ThemeClient`.

#### Gemini Client

```jsx
import ThemeClient from "ginga-ui/ai";

const themeClient = new ThemeClient({
  clientType: "gemini",
  apiKey: "YOUR_GEMINI_API_KEY",
});

const handleClick = async () => {
  await themeClient.generateTheme("the image of you thought");
};

const ThemeGenerationButton = () => {
  return <Button onClick={handleClick}>Button</Button>;
};

export default ThemeGenerationButton;
```

## Variables

| Name                 | Description      | Default Value |
| -------------------- | ---------------- | ------------- |
| `--color-primary`    | Accent color     | #1677ff       |
| `--color-secondary`  | Main text color  | #000          |
| `--color-background` | Background color | #fff          |
| `--width-border`     | Border width     | 2px           |
| `--size-radius`      | Border radius    | 1rem          |
| `--font-family`      | Font family      | sans-serif    |
