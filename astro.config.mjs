// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Your live address on GitHub Pages. Change it if you add a custom domain later.
  site: 'https://rbelonline.github.io',
  // Hides the Astro toolbar that appears at the bottom during `npm run dev`.
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
