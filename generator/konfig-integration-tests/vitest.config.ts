import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, "sdks/**/*"],
    watch: false,
    testTimeout: 450_000,
    reporters: ["default", "html"],
  },
});
