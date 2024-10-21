import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typeScriptESLint from '@typescript-eslint/eslint-plugin';
import typeScriptESLintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

const compat = new FlatCompat();

export default [
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends('plugin:@typescript-eslint/eslint-recommended'),
  {
    plugins: {
      typeScriptESLint,
    },
    languageOptions: {
      parser: typeScriptESLintParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        globals: globals.browser,
      }
    },
    rules: {
    }
  }
];