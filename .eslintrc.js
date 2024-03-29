module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/strongly-recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  // required to lint *.vue files
  plugins: ['nuxt', 'vue'],
  // add your custom rules here
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', {"allowTemplateLiterals": true}],
    'vue/require-default-prop': 'off',
    'comma-dangle': ['warn', 'only-multiline'],
    'space-before-function-paren': ['error', 'never'],
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/quotes': ['error', 'single', {"allowTemplateLiterals": true}],
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-spacing': ['warn', 'always', {
      'objectsInArrays': false,
      'arraysInArrays': false,
    }],
    'array-bracket-newline': ['warn', {
      'multiline': true
    }]
  },
};
