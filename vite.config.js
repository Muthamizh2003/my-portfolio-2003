import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/portfolio-react/",  // 👈 correct spelling
  plugins: [react()],
})
