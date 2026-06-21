import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://blakielabs.com",
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false
    }
  }
});
