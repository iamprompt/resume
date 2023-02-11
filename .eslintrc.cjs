module.exports = {
  root: true,
  extends: ['@antfu', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 80,
        tabWidth: 2,
        plugins: [require('prettier-plugin-tailwindcss')],
      },
    ],
  },
}
