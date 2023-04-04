import path from 'path';
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  // plugin config
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: path.join(process.cwd(), 'src/app.js'),
      exportName: 'app'
    })
  ],

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
