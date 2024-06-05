/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        surface: '#eef2ff',
        border: '#a5b4fc',
        primary: '#6366f1',
        hover: '#4338ca',
        pressed: '#1e1b4b',
        light: '#cbd5e1',
        secondary: '#64748b',
        semidark: '#1e293b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
        '3xl': '1535px',
      }
    },
  },
  plugins: [
  ],
}

