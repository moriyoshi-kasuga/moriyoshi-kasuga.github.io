import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://moriyoshi-kasuga.github.io",
  integrations: [icon(), mdx(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
