// @ts-check
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import { parser, parserOptions } from "eslint-plugin-vue/lib/configs/base";

export default [
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {},
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
    },
  },
  eslintConfigPrettier,
];
