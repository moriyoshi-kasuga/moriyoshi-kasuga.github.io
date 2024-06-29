import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettierRecommended,
];
