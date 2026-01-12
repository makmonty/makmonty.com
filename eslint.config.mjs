import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // add more generic rule sets here, such as:
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'semi': [ 'error', 'always' ],
      'quotes': [ 'error', 'single', { 'allowTemplateLiterals': true }],
      'comma-dangle': [ 'warn', 'only-multiline' ],
      'space-before-function-paren': [ 'error', 'never' ],
      'no-console': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'object-curly-spacing': [ 'warn', 'always' ],
      'array-bracket-spacing': [
        'warn', 'always', {
          'objectsInArrays': false,
          'arraysInArrays': false,
        }
      ],
      'array-bracket-newline': [
        'warn', {
          'multiline': true
        }
      ]
    }
  }
];
