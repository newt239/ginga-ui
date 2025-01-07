import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  importPlugin.flatConfigs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index",
            "object",
            "type"
          ],
          "pathGroups": [
            {
              "pattern": "{react,react-dom/**,react-router-dom}",
              "group": "builtin",
              "position": "before"
            }
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
          "alphabetize": {
            "order": "asc"
          },
          "newlines-between": "always"
        }
      ]
    },
  }
);