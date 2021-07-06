const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './dist/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        secondary: colors.rose,
        gray: colors.trueGray,
      },
      fontFamily: {
        sans: ['Sofia Pro Regular', 'system-ui'],
        serif: ['Chronicle Display Black', 'Georgia'],
        mono: ['SF Mono Regular', 'SFMono-Regular'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
