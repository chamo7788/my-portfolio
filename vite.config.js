// Importing the defineConfig helper from Vite
import { defineConfig } from 'vite'

// Importing the React plugin for Vite
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Adding the React plugin to the Vite configuration
  plugins: [react()],
})