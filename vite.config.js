// vite.config.js
import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev'; // CORRECTED IMPORT PATH
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

export default defineConfig({
  plugins: [
    remix(),
    netlifyPlugin() 
  ],
  // Keep this CSS CONFIGURATION
  css: {
    postcss: './postcss.config.js', // Explicitly tell Vite to use your postcss.config.js
  },
});