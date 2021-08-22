module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  ignorePatterns: [
    'node_modules/*',
    'public/*',
    '.cache/*',
    'temp.js',
    '**/vendor/*.js',
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'graphql',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
  },
};
