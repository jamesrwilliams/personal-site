module.exports = {
  root: true,
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
    'eslint:recommended',
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
    'import/extensions': [2, {
      extensions: {
        json: 'always',
        interface: 'never',
      },
    }],
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
