const extensions = ['.ts', '.js', '.json'];

module.exports = {
  env: {
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'class-methods-use-this': [0, { "exceptMethods": [] }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-console': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions,
      },
    },
    'import/extensions': extensions,
  },
  overrides: [
    {
      files: [
        '**/**.it-test.{j,t}s',
        '**/**.test.{j,t}s',
        'jest.setup.js',
        '**/__tests__/**',
        'jest.setup.js',
        '**/__mocks__/**',
        '**/test/**',
      ],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        'prefer-destructuring': ['error', { object: true, array: false }],
      },
    },
  ],
};
