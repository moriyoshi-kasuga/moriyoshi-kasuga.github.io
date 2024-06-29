// @ts-check

/** @type {import('lint-staged').Config} */
export default {
  "*.{js,ts,jsx,tsx,astro}": ["eslint --fix", "prettier --write"],
  "*.{md,html,json,yaml,yml}": ["prettier --write"],
};
