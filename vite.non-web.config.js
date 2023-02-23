import path from 'path';
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  // non-web app so appType should be 'custom' to exclude html middlewares
  appType: 'custom',

  // plugins
  plugins: [
    // node app
    ...VitePluginNode({
      adapter: 'express',
      appPath: path.join(process.cwd(), 'src/server.js')
    })
  ],

  // subdolder in project containing .env files
  envDir: 'config-env',

  // dev server config
  server: {
    // expose on PORT provided by pm2
    port: process.env.PORT
  },

  // testing config
  test: {
    globals: true,
    environment: 'node',
    setupFiles: path.join(__dirname, 'vitest.setup.js')
  }
});