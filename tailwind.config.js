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
        purple: '#7A7FC3'
      },
      backgroundImage: {
        defaultGradient:
          'linear-gradient(25deg, #2B8EC5 0%, #FDFDF9 100%), linear-gradient(159deg, #6E73BE 0%, #FDFDF9 100%)'
      }
    }
  },
  plugins: []
}
