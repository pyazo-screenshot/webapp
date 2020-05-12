const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#7f5af0',
          light: '#a591f6',
          dark: '#6546cb',
        },
        background: {
          default: '#16161A',
          dark: '#101013',
        },
        white: '#FFFFFE',
      },
    },
  },

  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        html: {
          backgroundColor: config('theme.colors.background'),
          background: config('theme.colors.background'),
        },
        body: {
          backgroundColor: config('theme.colors.background'),
          background: config('theme.colors.background'),
        },
        div: {
          backgroundColor: config('theme.colors.background'),
          background: config('theme.colors.background'),
        },
        h1: { fontSize: config('theme.fontSize.2xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') },
      });
    }),
  ],
};
