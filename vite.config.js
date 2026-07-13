import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    injectHTML(), // Этот плагин отвечает за склейку HTML
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // Если в будущем появятся новые страницы, ты просто добавишь их сюда через запятую:
        // about: resolve(__dirname, 'about.html'),
        // contacts: resolve(__dirname, 'contacts.html'),
      },
    },
  },
});
