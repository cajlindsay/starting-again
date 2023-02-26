import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const apis = [
  ['api-1', 3000],
  ['api-2', 3001]
];

export default defineConfig({
  // global plugins
  plugins: [
    // react app
    react(),

    // polyfills for browser specific features/syntax (e.g. css prefixing)
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],

  // subfolder in project containing .env files
  envDir: '_config-env',

  // dev server config
  server: {
    // expose on PORT provided by pm2
    port: process.env.PORT,

    // all api requests from a web app call the web app's own url, but then
    // proxy the requests to the apis
    proxy: apis.reduce(
      (prev, next) => ({
        ...prev,
        [`/${next[0]}`]: {
          target: `http://localhost:${next[1]}`,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(`/${next[0]}`, '')
        }
      }),
      {}
    )
  },

  resolve: {
    alias: [
      // mock some modules when running the dev server for visual tests
      ...(process.env.APP_ENV === 'visual_test'
        ? [
            // mock the auth.js module
            { find: /^.*\/web-common\/src\/auth.js/, replacement: '@starting-again/web-common/src/auth-mock.js' }
          ]
        : [])
    ]
  },

  // testing config
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.join(__dirname, 'vitest.setup.js')
  }
});
