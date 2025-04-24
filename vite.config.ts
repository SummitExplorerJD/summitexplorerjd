import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  base: '/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom',
            'react-router-dom'
          ]
        },
        chunkFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    dynamicImportVarsOptions: {
      warnOnError: true,
    },
    // Divide el código por rutas
    cssCodeSplit: true,
  }
})
