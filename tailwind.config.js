/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#09f6fd',
          DEFAULT: '#2fa0d6',
          dark: '#2e8fcb',
          50: '#e6f9fd',
          100: '#d0f4fb',
          200: '#a8ebf8',
          300: '#7de2f5',
          400: '#09f6fd',
          500: '#2fa0d6',
          600: '#2e8fcb',
          700: '#2575a8',
          800: '#1d5e85',
          900: '#154862',
        },
        'accent': {
          DEFAULT: '#09f6fd',
          light: '#d0f4fb',
          dark: '#2e8fcb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
