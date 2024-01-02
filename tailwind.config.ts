import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/react');

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  darkMode: 'class',
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'sans-jp': ['var(--font-NotoSansJP)'],
        'serif-jp': ['var(--font-NotoSerifJP)'],
        'mono-jp': ['var(--font-MPlusRounded1c)'],
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;

export default config;
