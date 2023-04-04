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
    // expose on PORT provided by pm2 config file or docker compose file
    port: process.env.PORT,
    host: '0.0.0.0'
  },

  // testing config
  test: {
    globals: true,
    environment: 'node',
    setupFiles: path.join(__dirname, 'vitest.setup.js')
  }
});
