/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#BBBBBB',
      'primary4': 'rgba(35, 161, 175, 0.10)',
      'secondary': 'rgba(15, 1, 41, 0.10)',
      'accent': '#5D13E7',
      'text': '#0F0129',
      'background': '#FDFCFC',
      'navbar-background': '#E5E3E7',
      'modal-background':'rgba(0, 0, 0, 0.70)',
      'disabled': "rgba(15, 1, 41, 0.25)",
      'onhover-btn': 'rgba(189, 242, 213, 0.25)',
      'divider': '#BBBBBB',
      'light-text': 'rgba(15, 1, 41, 0.50)',

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
        letterSpacing: '-0.48px',
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
        letterSpacing: "0.1px",
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
    extend: {
      borderRadius: {
        '4xl': '1.75rem',
      },
      boxShadow: {
        "box-shadow": '0px 3px 3px 0px rgba(0, 0, 0, 0.14)'
      }
    },
  },
  plugins: [],
}

