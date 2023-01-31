import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const apis = [
  ['api-1', 3000],
  ['api-2', 3001],
];

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  envDir: 'config-env', // dir in web projects containing env variabless
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
  // test specific configuration
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.join(__dirname, 'vitest.setup.js'),
  },
});
