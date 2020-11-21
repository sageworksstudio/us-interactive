module.exports = {
  root: true,
  env: {
    'browser': true,
    'es6': true,
    'node': true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    'ecmaVersion': 2018
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': [
      'error',
      'smart'
    ],
    'no-var': [
      'error'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'spaced-comment': [
      'error',
      'always'
    ],
    'eol-last': [
      'error',
      'always'
    ]
  }
}
