const commonExtends = (rulesArr) => [...rulesArr, 'prettier']

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: commonExtends(['eslint:recommended', 'eslint-config-prettier']),
  rules: {
    strict: ['error', 'never'],
  },
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: commonExtends([
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
      ]),
    },
  ],
}
