/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        edge: 'rgb(var(--edge) / <alpha-value>)',
        primary: {
          100: 'rgb(var(--primary-main-l1) / <alpha-value>)',
          200: 'rgb(var(--primary-main-l2) / <alpha-value>)',
          300: 'rgb(var(--primary-main-l3) / <alpha-value>)',
          DEFAULT: 'rgb(var(--primary-main) / <alpha-value>)',
          400: 'rgb(var(--primary-main) / <alpha-value>)',
          500: 'rgb(var(--primary-main-d1) / <alpha-value>)',
          600: 'rgb(var(--primary-main-d2) / <alpha-value>)',
          700: 'rgb(var(--primary-main-d3) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
