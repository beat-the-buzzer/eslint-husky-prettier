module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  env: {
    browser: true
  },
  plugins: ["vue"],
  extends: ["plugin:vue/essential", "@vue/standard", "prettier"],
  rules: {
    semi: 2,
    "no-else-return": 2
  }
};