import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  envDir: 'config-env',
  server: {
    port: process.env.PORT
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.join(__dirname, 'vitest.setup.js')
  }
});