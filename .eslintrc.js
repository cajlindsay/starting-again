module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,

    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
