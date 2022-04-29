import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react( {
    jsxRuntime: 'classic'
  })],
  build: {
    rollupOptions: {
      external: [ 'react' ]
    },
    lib: {
      entry: path.resolve(__dirname, 'src/LibraryComponent.jsx'),
      name: 'Library',
      fileName: (format) => `library.${format}.js`,
      formats: ['es']
    },
    outDir: 'libraryDist',
    sourcemap: true
  }
})
