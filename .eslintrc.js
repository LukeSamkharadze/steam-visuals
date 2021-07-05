module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "warn",
  },
  overrides: [
    {
      files: "*.ts",
      parserOptions: {
        project: "tsconfig.json",
      },
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      rules: {
        "prettier/prettier": "warn",
      },
    },
  ],
};
