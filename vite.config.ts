import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Para el sitio personal https://drewcrx.github.io/
  base: '/',
})
