// vite.config.js
import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev'; // CORRECTED IMPORT PATH

export default defineConfig({
  plugins: [
    remix(),
  ],
  // Keep this CSS CONFIGURATION
  css: {
    postcss: './postcss.config.js', // Explicitly tell Vite to use your postcss.config.js
  },
});