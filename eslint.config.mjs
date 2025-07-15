import antfu from "@antfu/eslint-config";

export default antfu(
  {
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    rules: {
      "import/no-self-import": "off",
      "@typescript-eslint/no-namespace": "off",
      "style/arrow-parens": "off",
      "style/multiline-ternary": "off",
    },
    astro: true,
  },
);
