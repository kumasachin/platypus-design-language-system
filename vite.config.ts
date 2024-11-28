import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 4000, // Hardcode the port to 4000
  },
  resolve: {
    alias: {
      dls: path.resolve(__dirname, './src/dls'),
      stories: path.resolve(__dirname, './src/stories'),
    },
  },
})
