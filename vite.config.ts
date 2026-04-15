import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Custom domain (CNAME) → root base. If you ever drop CNAME, set base to '/repo-name/'.
export default defineConfig({
  base: '/',
  plugins: [vue(), tailwindcss()],
})
