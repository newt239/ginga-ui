export const requiredVariables = [
  {
    name: "--color-primary",
    description: "Accent color",
    defaultValue: "#1677ff",
  },
  {
    name: "--color-secondary",
    description: "Main text color",
    defaultValue: "#000000",
  },
  {
    name: "--color-background",
    description: "Background color",
    defaultValue: "#ffffff",
  },
  {
    name: "--width-border",
    description: "Border width",
    defaultValue: "2px",
  },
  {
    name: "--size-radius",
    description: "Border radius",
    defaultValue: "1rem",
  },
  {
    name: "--font-family",
    description: "Font family",
    defaultValue: "sans-serif",
  },
];

export const properties = Object.fromEntries(
  requiredVariables.map((variable) => [variable.name, { type: "string" }])
);

export const SYSTEM_PROMPT = `
# Instruction

You are a awesome designer and you are thinking about creating a new theme for a website.
The customer gives you a word or tastes about the ambience of the site, return the best value for all variables.
Consider sufficient contrast with the accent color / main text color and background color.
The values should follow the format shown how.

# Variables

| Name | Description | Default Value |
| ---- | ----------- | ------------- |
${requiredVariables
  .map(
    ({ name, description, defaultValue }) => `
| ${name} | ${description} | ${defaultValue} |`
  )
  .join("\n")}
`;
