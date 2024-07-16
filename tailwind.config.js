const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,

      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
      content: 'hsl(var(--color-content) / <alpha-value>)',
      neutral: {
        100: 'hsl(var(--color-neutral-100) / <alpha-value>)',
        300: 'hsl(var(--color-neutral-300) / <alpha-value>)',
        500: 'hsl(var(--color-neutral-500) / <alpha-value>)',
        700: 'hsl(var(--color-neutral-700) / <alpha-value>)',
        900: 'hsl(var(--color-neutral-900) / <alpha-value>)',
      },
    },
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['var(--font-size)', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '44px'],
      '3xl': ['44px', '64px'],
    },

    extend: {},
  },
  plugins: [],
}
