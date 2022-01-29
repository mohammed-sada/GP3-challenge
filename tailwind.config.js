module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.4rem',
      },
      fontFamily: {
        'manrope': 'Manrope',
      },
      colors: {
        primary: '#040C18',
        secondary: '#002853',
        darkBlue: '#031B34',
        lightOrange: '#FF8A71',
        orange: {
          600: '#FF4820'
        },
        cyan: {
          100: '#81AFDD'
        }
      }
    },
  },
  plugins: [],
};
