module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ["temp.js", "**/vendor/*.js", 'public'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {},
  env: {
    node: true
  }
}
