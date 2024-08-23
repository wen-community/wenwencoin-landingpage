/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        2.5: '0.625rem'
      },
      padding: {
        3.125: '0.781rem'
      },
      colors: {
        lightGray: '#D9D9D9',
        skyBlue: '#2C8FC6',
        purple: '#7A7FC3',
        backgroundSecondary: '#F7FAFC',
        tertiary: '#F2F6FA',
        lightBlue: '#96BEDC'
      },
      backgroundImage: {
        defaultGradient:
          'linear-gradient(25deg, #2B8EC5 0%, #FDFDF9 100%), linear-gradient(159deg, #6E73BE 0%, #FDFDF9 100%)'
      },
      maxHeight: {
        'screen-md': '47.875rem'
      },
      fontSize: {
        10: '2.5rem' // 40px
      },
      inset: {
        '1/20': '5%'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '21/9': '21 / 9'
      },
      keyframes: {
        rock: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(15deg)' }
        },
        travel: {
          '0%, 100%': { transform: 'translateY(10%)' },
          '50%': { transform: 'translateY(80%)' }
        },
        fadeIn: {
          '0%': { transform: 'translateY(80%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 }
        }
      },
      animation: {
        rock: 'rock 10s ease-in-out infinite',
        travel: 'travel 2s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
