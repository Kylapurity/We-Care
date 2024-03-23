/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        mediumBlue: 'hsl(210, 50%, 50%)',
        purple: 'hsl(270, 50%, 50%)',
        lightPurple: 'hsl(270, 70%, 80%)',
        darkPurple: 'hsl(270, 50%, 30%)',
        brown: 'hsl(30, 50%, 30%)',
        lightBrown: 'hsl(30, 50%, 60%)',
        darkBrown: 'hsl(30, 50%, 20%)',
        maroon: 'hsl(330, 50%, 30%)',
        darkMaroon: 'hsl(330, 50%, 20%)',
        lightMaroon: 'hsl(330, 50%, 60%)',
        mediumPurple: 'hsl(270, 50%, 50%)',
        transparent: 'transparent'
      },
    },
  },
  plugins: [],
}
