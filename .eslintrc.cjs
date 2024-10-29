module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
  ],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: [ '*.astro' ],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: [ '.astro' ],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'semi': [ 'error', 'always' ],
    'quotes': [ 'error', 'single', { 'allowTemplateLiterals': true }],
    'comma-dangle': [ 'warn', 'only-multiline' ],
    'space-before-function-paren': [ 'error', 'never' ],
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    // '@typescript-eslint/quotes': [ 'error', 'single', { 'allowTemplateLiterals': true }],
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
  },
};
