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
      height: {
        md: '52rem',
        lg: '72rem',
        xl: '108rem'
      },
      width: {
        4.5: '1.125rem'
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
          'linear-gradient(25deg, #2B8EC5 0%, #FDFDF9 100%), linear-gradient(159deg, #6E73BE 0%, #FDFDF9 100%)',
        stripes:
          'linear-gradient(45deg, #2C8FC6 25%, transparent 25%, transparent 50%, #96BEDC 50%, lightblue 75%, #7A7FC3 75%, #7A7FC3)'
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
          '0%': { transform: 'translateY(40%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 }
        },
        hiThere: {
          '30%': { transform: 'scale(1.2)' },
          '40%': { transform: 'rotate(-20deg), scale(1.2)' },
          '50%': { transform: 'rotate(20deg) ,scale(1.2)' },
          '60%': { transform: 'rotate(-20deg) ,scale(1.2)' },
          '70%': { transform: 'rotate(0deg) ,scale(1.2)' },
          '100%': { transform: 'scale(1)' }
        },
        slider: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        progressBar: {
          '0%': { 'background-position': '40px 0' },
          '100%': { 'background-position': '0 0' }
        }
      },
      animation: {
        progressBar: 'progressBar 1s linear infinite',
        rock: 'rock 10s ease-in-out infinite',
        travel: 'travel 2s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        hiThere: 'hiThere 1s ease infinite;',
        slider: 'slider 10s ease-in-out infinite'
      },
      backgroundSize: {
        'size-stripes': '20px 20px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
