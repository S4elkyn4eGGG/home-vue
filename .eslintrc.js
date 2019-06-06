module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'ignores': [],
    }],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'always',
      'imports': 'ignore',
      'exports': 'ignore',
      'functions': 'ignore',
    }],
    'standard/object-curly-even-spacing': [2, 'either'],
    'standard/array-bracket-even-spacing': [2, 'either'],
    'standard/computed-property-even-spacing': [2, 'even'],
    'standard/no-callback-literal': [2, ['cb', 'callback']],
    'array-bracket-spacing': ['error', 'never', { 'singleValue': false, }],
    'indent': ['error', 2],
    'semi': [1, 'always'],
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true, }],
    'vue/script-indent': ['error', 1, { 'baseIndent': 2, 'ignores': [], }
    ],
  },

  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off',
      },
    },
    {
      'files': ['**/*.ts', '**/*.tsx'],
      'rules': {
        'no-unused-vars': 'off',
      },
    }
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    plugins: ['typescript'],
  },

  extends: ['plugin:vue/essential', '@vue/typescript', '@vue/standard'],
};
