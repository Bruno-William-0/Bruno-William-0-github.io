import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/task': {
        target: 'http://localhost:3000', // Backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
