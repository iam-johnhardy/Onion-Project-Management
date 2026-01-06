import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  // plugins: [
  //   react(),
  //   tailwindcss(),
  //   visualizer({ filename: 'dist/stats.html', open: true })
  // ],
  // build: {
  //   chunkSizeWarningLimit: 600, // Raise threshold to 600 kB (default 500)
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         // Separate vendor code into chunks
  //         if (id.includes('node_modules')) {
  //           if (id.includes('react')) {
  //             return 'vendor-react'
  //           }
  //           if (id.includes('chart') || id.includes('recharts') || id.includes('d3')) {
  //             return 'vendor-charts'
  //           }
  //           if (id.includes('date-fns') || id.includes('moment')) {
  //             return 'vendor-date'
  //           }
  //           return 'vendor-other'
  //         }
  //       }
  //     }
  //   }
  // }
  plugins: [
  react(),
  tailwindcss(),
  process.env.NODE_ENV === 'development' &&
    visualizer({ filename: 'dist/stats.html', open: true })
].filter(Boolean)

})
