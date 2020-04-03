module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'comma-spacing': 'error',
    'semi': ['error', 'never'],
  },
}
