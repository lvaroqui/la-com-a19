module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs',
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'prettier/vue',
    'prettier',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
  }
}
