/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#23A1AF',
      'primary1': 'rgba(35, 161, 175, 0.75)',
      'primary2':'rgba(35, 161, 175, 0.50)',
      'primary3':'rgba(35, 161, 175, 0.25)',
      'primary4': 'rgba(35, 161, 175, 0.10)',
      'primary-text': '#1C7E87',
      'accent': '#F7559E',
      'accent1': 'rgba(247, 85, 158, 0.75)',
      'accent2': 'rgba(247, 85, 158, 0.50)',
      'accent3': 'rgba(247, 85, 158, 0.25)',
      'accent-text': '#E50B6D',
      'text': '#001111',
      'text1': 'rgba(0, 17, 17, 0.75)',
      'text2': 'rgba(0, 17, 17, 0.50)',
      'text3': 'rgba(0, 17, 17, 0.25)',
      'background': '#FCFEFE',
      'link': '#285ED7',
      'success': '#41993F',
      'success1': 'rgba(65, 153, 63, 0.75)',
      'success2': 'rgba(65, 153, 63, 0.50)',
      'success3': 'rgba(65, 153, 63, 0.25)',
      'error': '#D61F14',

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
        "box-shadow": '0px 3px 3px 0px rgba(0, 0, 0, 0.14)',
        "card-shadow": '0px 0px 3px 1px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

