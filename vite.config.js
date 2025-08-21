import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/my-portfolio-2003/",  // 👈 correct spelling
  plugins: [react()],
})
