import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        mono: ["'M PLUS 1'", ...defaultTheme.fontFamily.mono],
        monospace: ["'M PLUS 1 Code'", ...defaultTheme.fontFamily.sans],
      },
      // ref: https://nextui.org/docs/customization/colors#common-colors
      colors: {
        divider: 'rgba(17, 17, 17, 0.15)',
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#006FEE',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
        secondary: {
          50: '#f2eafa',
          100: '#e4d4f4',
          200: '#c9a9e9',
          300: '#ae7ede',
          400: '#9353d3',
          500: '#7828c8',
          600: '#6020a0',
          700: '#481878',
          800: '#301050',
          900: '#180828',
        },
        success: {
          50: '#e8faf0',
          100: '#d1f4e0',
          200: '#a2e9c1',
          300: '#74dfa2',
          400: '#45d483',
          500: '#17c964',
          600: '#12a150',
          700: '#0e793c',
          800: '#095028',
          900: '#052814',
        },
        warning: {
          50: '#fefce8',
          100: '#fdedd3',
          200: '#fbdba7',
          300: '#f9c97c',
          400: '#f7b750',
          500: '#f5a524',
          600: '#c4841d',
          700: '#936316',
          800: '#62420e',
          900: '#312107',
        },
        danger: {
          50: '#fee7ef',
          100: '#fdd0df',
          200: '#faa0bf',
          300: '#f871a0',
          400: '#f54180',
          500: '#f31260',
          600: '#c20e4d',
          700: '#920b3a',
          800: '#610726',
          900: '#310413',
        },
      },
    },
  },
  plugins: [],
};
