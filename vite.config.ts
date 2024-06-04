import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, './src/components'),
      pages: resolve(__dirname, './src/pages'),
      store: resolve(__dirname, './src/store'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  server: {
    port: 5003,
  },
});
