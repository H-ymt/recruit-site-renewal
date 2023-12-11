import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/_breakpoint.scss";`,
        },
      },
    },
  },
});
