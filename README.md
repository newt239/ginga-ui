# Ginga UI

![version](https://img.shields.io/github/package-json/v/newt239/ginga-ui?style=flat)

**Ginga UI** is an UI component library for React. This libarary is using LLM to styling components. Components will design based on the Website contents or user's prompt.

## Recommended Environment

### Frameworks

- React 18 or later
- Next.js 13 or later with App Router
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

### 2. Import CSS file on `index.css`

```css
@import "ginga-ui/dist/variables.css";
@import "ginga-ui/dist/style.css";
```

### 3. Import components

```jsx
import { Button } from "ginga-ui";

function App() {
  return <Button>Button</Button>;
}
```

## Theme Generation

You can generate with your own theme by using `createTheme` function.

```jsx
import { createTheme } from "ginga-ui";

const handleClick = createTheme({
  prompt: "the image of you thought",
  apiKey: "YOUR_OPEN_AI_KEY",
});

function App() {
  return <Button onClick={handleClick}>Button</Button>;
}
```

If you want to call on client side, you can use `dangerouslyAllowBrowser` option.

```jsx
const handleClick = createTheme({
  prompt: "the image of you thought",
  apiKey: "YOUR_OPEN_AI_KEY",
  options: {
    dangerouslyAllowBrowser: true,
  },
});
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
