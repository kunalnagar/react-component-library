module.exports = {
  extends: ['eslint-config-kunalnagar'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-magic-numbers': 'off',
    'sort-keys': 'off',
  },
}
