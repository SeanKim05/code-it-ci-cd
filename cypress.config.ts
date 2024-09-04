import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://code-it-ci-cd.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
