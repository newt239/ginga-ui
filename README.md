# Ginga UI

![version](https://img.shields.io/github/package-json/v/newt239/ginga-ui?style=flat)

**Ginga UI** is an UI component library for React. This libarary is using LLM to styling components. Components will design based on the Website contents or user's prompt.

## Installation

### 1. Install the package

```bash
npm install ginga-ui
```

### 2. Import CSS file

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
