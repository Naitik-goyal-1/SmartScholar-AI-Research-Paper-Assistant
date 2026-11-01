import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split large dependencies into separate chunks so the browser
    // can load them in parallel and cache them independently.
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'supabase': ['@supabase/supabase-js'],
          'flow': ['@xyflow/react'],
        },
      },
    },
    // Suppress the 500kB chunk size warning (we already split above)
    chunkSizeWarningLimit: 600,
  },
})

