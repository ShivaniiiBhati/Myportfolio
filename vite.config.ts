import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import apiRoutes from 'vite-plugin-api-routes';

export default defineConfig({
  plugins: [
    react(),

    apiRoutes({
      mode: 'isolated',
      configure: 'src/server/configure.js',
      dirs: [
        {
          dir: './src/server/api',
          route: '',
        },
      ],
      forceRestart: true,
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/api': path.resolve(__dirname, './src/server/api'),
    },

    dedupe: ['react', 'react-dom'],
  },

  server: {
    host: 'localhost',
    port: 5173,
  },

  preview: {
    host: 'localhost',
    port: 5173,
  },
});