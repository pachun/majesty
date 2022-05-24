module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "tsconfig.json",
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/ban-ts-comment": 0,
  },
}
