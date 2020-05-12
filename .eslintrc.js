module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['import', 'react-hooks'],
  rules: {
    'import/no-default-export': 'error',
    'prefer-const': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
