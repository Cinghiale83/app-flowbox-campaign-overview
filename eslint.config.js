const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*", "node_modules/*", "ios/*", "android/*"],
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "smart"],
    },
  },
]);
