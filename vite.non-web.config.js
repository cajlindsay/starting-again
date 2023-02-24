import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig(({ mode }) => {
  // Vite's default behaviour for environment variables is that they are loaded into 'import.meta.env'. This is
  // not appropriate for an api which should access environment variables on 'process.env'. For real server
  // environments this is easy, but for local development we need to manually load them. 
  // Thankfully Vite gives us the function 'loadEnv' that it uses to automatically load .env files. We can use
  // it to manually load our .env setup (including environment specific files) into 'process.env'.
  if (mode === 'development') {
    const envVars = loadEnv(mode, path.join(process.cwd(), 'config-env'), '');
    Object.assign(process.env, envVars);
  }

  return {
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

    // dev server config
    server: {
      // expose on PORT provided by pm2
      port: process.env.PORT
    },

    // prod bundle config
    ssr: {
      // set format to 'cjs' to create a self-contained bundle with no need for installing dependencies
      format: 'cjs',
    },

    // testing config
    test: {
      globals: true,
      environment: 'node',
      setupFiles: path.join(__dirname, 'vitest.setup.js')
    }
  };
});
