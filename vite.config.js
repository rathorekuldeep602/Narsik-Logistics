import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        whatsappGlow: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "70%": {
            transform: "scale(1.3)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1.3)",
            opacity: "0",
          },
        },
      },

      animation: {
        whatsappGlow: "whatsappGlow 3s ease-out infinite",
      },
    },
  },
  plugins: [react(),
  tailwindcss(),]
})
