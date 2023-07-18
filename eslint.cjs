module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'promise'],
  root: true,
  rules: {
    semi: [2, 'always'],
    quotes: [2, 'single', { avoidEscape: true }],
    'max-params': ['error', 3],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          object: true,
          array: false,
        },
        AssignmentExpression: {
          object: true,
          array: false,
        },
      },
    ],
  },
};
