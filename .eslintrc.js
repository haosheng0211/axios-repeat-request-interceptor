module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'semi': ['error', 'never'],
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
  },
  parserOptions: {
    'parser': '@babel/eslint-parser',
    'sourceType': 'module',
    'ecmaVersion': 8,
  },
}
