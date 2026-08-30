import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: false,
  rules: {
    "import/no-self-import": "off",
    "@typescript-eslint/no-namespace": "off",
  },
  astro: true,
});
