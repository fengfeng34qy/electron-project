module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    // 'arrow-parens': 0,
    // allow async-await
    // 'generator-star-spacing': 0,
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0

    "semi": [2, "always"],
    "quotes": [0, "single", "avoid-escape"],
    "space-before-function-paren": [0, "never"],
    // 因为agree_sdk中会出现
    "wrap-iife": [0, "any"],
    "spaced-comment": [0, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] }],
    "eqeqeq": [0, "allow-null"],
    "one-var": [0, { "initialized": "never" }],
    "eol-last": 0,
    "no-multi-spaces": 0,
    "no-useless-return": 0,
    "parser": "babel-eslint",
  }
}
