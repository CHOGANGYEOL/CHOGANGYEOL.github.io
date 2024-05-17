module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/consistent-type-assertions": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-unsafe-argument": 0,
    "@typescript-eslint/no-misused-promises": 0,
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/return-await": 1,
    "@typescript-eslint/prefer-nullish-coalescing": 1,
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "type",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
