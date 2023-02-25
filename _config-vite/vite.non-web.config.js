import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    // testing config
    test: {
      globals: true,
      environment: 'node',
      setupFiles: path.join(__dirname, 'vitest.setup.js')
    }
});
