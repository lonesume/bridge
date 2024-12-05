
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "../",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Replace with your Flask server URL
        changeOrigin: true,
      },
    },
  },
});
