module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": ["error", "always-multiline"],
    "arrow-parens": [
      "error",
      "always",
      {
        requireForBlockBody: true,
      },
    ],
  },
};
