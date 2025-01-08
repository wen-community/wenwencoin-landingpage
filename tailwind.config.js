/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}'
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
        thunder: '#362332',
        purple: '#7A7FC3',
        bali: '#86A6B0',
        puce: '#c67b8f',
        roseTaupe: '#6F455A',
        tertiary: '#F2F6FA',
        lightBlue: '#96BEDC',
        deepPurple: '#191826'
      },
      backgroundImage: {
        mobile: "url('/background-mobile.png')",
        desktop: "url('/background-web.png')",
        customImage: "url('/IMG_0653.png')",
        backgroundSecondary:
          'linear-gradient(25deg, rgba(34, 22, 33, 1) 0%, rgba(112, 69, 90, 1) 50%, rgba(15, 34, 73, 0.95) 100%)',
        defaultGradient:
          'linear-gradient(25deg, #2B8EC5 0%, #FDFDF9 100%), linear-gradient(159deg, #6E73BE 0%, #FDFDF9 100%)',
        stripes:
          'linear-gradient(to bottom, #87517f 0%, #513b4a 100%),radial-gradient(circle, rgba(135, 81, 127, 0.5) 10%, transparent 70%)',
        spaceBackground:
          'radial-gradient(circle at center, rgba(54, 35, 50, 0.9) 0%, rgba(30, 30, 60, 0.95) 30%, rgba(10, 10, 20, 1) 100%)'
      },
      maxHeight: {
        'screen-md': '47.875rem'
      },
      fontSize: {
        10: '2.5rem',
        8: '2.0rem'
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
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        progressBar: {
          '0%': { 'background-position': '40px 0' },
          '100%': { 'background-position': '0 0' }
        },
        gridGoDown: {
          '0%': {
            'background-position-y': '0',
            '-webkit-mask-position': '50% 0',
            'mask-position': '50% 0'
          },
          '100%': {
            'background-position-y': '100%',
            '-webkit-mask-position': '50% 100%',
            'mask-position': '50% 100%'
          }
        }
      },
      animation: {
        progressBar: 'progressBar 1s linear infinite',
        rock: 'rock 10s ease-in-out infinite',
        travel: 'travel 2s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        hiThere: 'hiThere 1s ease infinite;',
        slider: 'slider 30s linear infinite'
      },
      backgroundSize: {
        'size-stripes': '20px 20px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
