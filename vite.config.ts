import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/chat/completions": "https://api.openai.com/v1",
      "changeOrigin": "true",
    }  
  } ,
  plugins: [react()],
})
