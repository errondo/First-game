/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        show: {
          '0%' : {bottom : '-200px'},
          '100%': {bottom : '0px'}
        },
        unshow :{
          '0%': {bottom: '0px'},
          '100%': {bottom: '-200px'}
        },
        show2: {
          '0%' : {bottom : '-200px'},
          '100%': {bottom : '46px'}
        }
      },
      backgroundImage: {
        'jjkbg1': 'url(./backg/jjkbg1.jpeg)',
        'jjkbg2': 'url(./backg/jjkbg2.jpeg)',
        'jjkbg3': 'url(./backg/jjkbg3.jpeg)',
        'jjkbg4': 'url(./backg/jjkbg4.jpeg)',
        'jjkbg5': 'url(./backg/jjkbg5.webp)',
        'jjkbg6': 'url(./backg/jjkbg6.jpg)',
      },
      width: {
        '100' : '500px'
      },
      colors : {
        'darkRed': '#4D0D0D'
      },
      color : {
        'black': '#00000',
      }
    },
  },
  plugins: [],
}
