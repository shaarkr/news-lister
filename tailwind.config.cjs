const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Open Sans', ...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
