/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7f5af0',
          light: '#a591f6',
          dark: '#6546cb',
        },
        background: {
          DEFAULT: '#16161A',
          dark: '#101013',
        },
        white: '#FFFFFE',
      },
    },
  },
  plugins: [],
};
