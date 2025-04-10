import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://moriyoshi-kasuga.github.io',
  integrations: [icon(), mdx(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
