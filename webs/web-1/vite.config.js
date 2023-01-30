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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config-tests/vitest.setup.js'
  }
});