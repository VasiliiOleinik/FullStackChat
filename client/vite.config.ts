import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => ({
  plugins: [
    viteTsconfigPaths(),
    react({ include: '**/*.{jsx,tsx,js,ts}' }),
    tsconfigPaths()
  ],
  server: {
    port: 8899
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}))
