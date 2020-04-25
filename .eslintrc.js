module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['import'],
  rules: {
    'import/no-default-export': 'error',
    'prefer-const': 'error',
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
