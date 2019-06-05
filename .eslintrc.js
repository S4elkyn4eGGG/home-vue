module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      2,
      {
        printWidth: 100,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
      },
    ],
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
