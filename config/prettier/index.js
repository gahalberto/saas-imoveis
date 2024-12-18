/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig} */

const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 80,
  tabwidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "auto",
  bracketSameLine: false,
};

module.exports = config;
