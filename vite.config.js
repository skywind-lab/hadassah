import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

export default defineConfig({
  base: "/hadassah/", // <-- ОБЯЗАТЕЛЬНО ДОБАВЬ ЭТУ СТРОКУ!
  plugins: [
    injectHTML({ debug: true }), // Этот плагин отвечает за склейку HTML
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        skincare: resolve(__dirname, "skincare.html"),
        makeup: resolve(__dirname, "makeup.html"),
        fragrances: resolve(__dirname, "fragrances.html"),
        contact: resolve(__dirname, "contact.html"),
        // Если в будущем появятся новые страницы, ты просто добавишь их сюда через запятую:
      },
    },
  },
});
