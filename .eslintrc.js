module.exports = {
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended', 'eslint:recommended'],
  rules: {
    'no-console': 'warn',
    'no-alert': 'warn',
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
