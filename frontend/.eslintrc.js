module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "plugin:es-beautifier/standard", "@vue/typescript"],
  rules: {
    "comma-dangle": ["error", "never"],
    "linebreak-style": "off",
    quotes: [2, "single", { avoidEscape: true }],
    "lines-around-comment": "off",
    "arrow-parens": 0,
    "es-beautifier/multiline-object-properties": {
      allowSingleLine: true,
      maxPropertiesInSingleLine: 8,
      maxLenInSingleLine: 120
    },
    "newline-per-chained-call": 0
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
