/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        edge: 'rgb(var(--edge) / <alpha-value>)',
        'primary-main': 'rgb(var(--primary-main) / <alpha-value>)',
        'primary-main-l1': 'rgb(var(--primary-main-l1) / <alpha-value>)',
        'primary-main-l2': 'rgb(var(--primary-main-l2) / <alpha-value>)',
        'primary-main-l3': 'rgb(var(--primary-main-l3) / <alpha-value>)',
        'primary-main-d1': 'rgb(var(--primary-main-d1) / <alpha-value>)',
        'primary-main-d2': 'rgb(var(--primary-main-d2) / <alpha-value>)',
        'primary-main-d3': 'rgb(var(--primary-main-d3) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
