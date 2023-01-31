import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const apis = [
  ['api-1', 3000],
  ['api-2', 3001],
];

export default defineConfig({
  // global plugins
  plugins: [
    // react app
    react(),

    // polyfills for browser specific features/syntax (e.g. css prefixing)
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],

  // dir in web projects containing .env files
  envDir: 'config-env',

  // dev server config
  server: {
    // expose on PORT provided by pm2
    port: process.env.PORT,

    // proxy to all localhost apis
    proxy: apis.reduce(
      (prev, next) => ({
        ...prev,
        [`/${next[0]}`]: {
          target: `http://localhost:${next[1]}`,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(`/${next[0]}`, ''),
        },
      }),
      {}
    ),
  },

  // testing config
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.join(__dirname, 'vitest.setup.js'),
  },
});
