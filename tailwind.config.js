/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#BDF2D5',
      'secondary': '#7AD9F5',
      'accent': '#5D13E7',
      'text': '#0F0129',
      'background': '#FDFCFC',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    fontSize: {
      'header1': ['4rem', {
        letterSpacing: '-2%',
        fontWeight: '700',
      }],
      'header2': ['3.5rem', {
        letterSpacing: '-2%',
        fontWeight: '700',
      }],
      'header3': ['2.25rem', {
        letterSpacing: '-2%',
        fontWeight: '600',
      }],
      'header4': ['1.5rem', {
        letterSpacing: '-2%',
        fontWeight: '600',
      }],
      'bold-body': ['1.125rem', {
        letterSpacing: '-2%',
        fontWeight: '700',
      }],
      'subtitle': ['1.25rem', {
        fontWeight: '500'
      }],
      'body': ['1.125rem', {
        lineHeight: '140%',
        fontWeight: '400',
      }],
      'small-body': ['1rem', {
        lineHeight: '140%',
        fontWeight: '700',
      }],
      'button-text': ['1rem', {
        letterSpacing: '2%',
        fontWeight: '500',
      }],
      'caption': ['0.875rem', {
        letterSpacing: '0%',
        fontWeight: '400',
      }],
      'over-line': ['0.875rem', {
        letterSpacing: '4%',
        fontWeight: '400',
      }],
    },
    extend: {},
  },
  plugins: [],
}

