import antfu from "@antfu/eslint-config";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";

export default antfu(
  {
    stylistic: false,
    rules: {
      "import/no-self-import": "off",
      "@typescript-eslint/no-namespace": "off",
    },
    astro: true,
  },
  betterTailwindcss.configs.recommended,
  {
    settings: {
      "better-tailwindcss": {
        entryPoint: "./src/globals.css",
        detectComponentClasses: true,
      },
    },
    rules: {
      // scoped <style> のクラス名(Tailwind非対応)を誤検知するため無効化
      "better-tailwindcss/no-unknown-classes": "off",
      // Prettier のフォーマットと競合するため無効化
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
    },
  },
);
