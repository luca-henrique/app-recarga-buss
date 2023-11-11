module.exports = {
  root: true,
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier'],

  extends: [
    '@react-native',
    'airbnb-typescript/base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },

  rules: {
    'prettier/prettier': 'error',
  },
};
