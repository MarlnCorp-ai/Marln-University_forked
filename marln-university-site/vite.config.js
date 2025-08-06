import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect if running in Amplify
const isAmplify = process.env.AMPLIFY_ENV !== undefined

export default defineConfig({
  base: isAmplify || process.env.NODE_ENV === 'production' ? '/' : '/',
  plugins: [react()],
})
