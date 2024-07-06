// @ts-check

/** @type {import('lint-staged').Config} */
export default {
  './src/**/*.{js,ts,jsx,tsx,astro}': ['eslint --fix', 'prettier --write'],
  './src/**/*.{md,html,json,yaml,yml,css}': ['prettier --write'],
};
