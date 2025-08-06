import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isAmplify = process.env.AMPLIFY_ENV !== undefined;

// https://vitejs.dev/config/
export default defineConfig({
  base: isAmplify ? '/' : process.env.NODE_ENV === 'production' ? '/Marln-University/' : '/',
  plugins: [react()],
})