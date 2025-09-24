import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unfonts from "unplugin-fonts/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    Unfonts({
      // Google Fonts API V2
      google: {
        display: "swap",
        preconnect: true,

        injectTo: "head-prepend",
        /**
         * Fonts families lists
         */
        families: [
          // families can be either strings (only regular 400 will be loaded)
          "Inter",
          "Roboto",
          "Open Sans",
          "Lato",
        ],
      },
    }),
    vue(),
  ],
});
