/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        faePrimary: '#0d6efd',
        faeSecondary: '#6c757d',
        faeDark: '#282930',
        faeLight: '#f8f9fa',
        faeCyan: '#42c5ff'
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        faeTheme: {
          "primary": "#0d6efd",
          "secondary": "#6c757d",
          "accent": "#42c5ff",
          "neutral": "#282930",
          "base-100": "#ffffff",
          "info": "#0dcaf0",
          "success": "#198754",
          "warning": "#ffc107",
          "error": "#e50043",
        },
      },
    ],
  },
}
