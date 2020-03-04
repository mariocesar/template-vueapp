const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.vue", "./public/**/*.html", "./public/index.html"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const productionPlugins =
  process.env.NODE_ENV === "production" ? [purgecss, require("cssnano")] : [];

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url"),
    require("tailwindcss"),
    require("postcss-preset-env")({ stage: 0 }),
    require("autoprefixer"),
    ...productionPlugins,
  ],
};
