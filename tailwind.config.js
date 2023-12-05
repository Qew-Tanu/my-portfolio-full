/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 5s ease-in-out infinite',
        flip: 'flip 0.5s linear 1 forwards',
        flip2: 'flip2 0.5s 0.5s linear 1 forwards'
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: 1
          },
          '40%': {
            opacity: 0
          },
          '50%': {
            opacity: 0
          },
          '60%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          },
        },
        flip: {
          '0%': {
            transform: "rotateY(0deg)"
          },
          '50%': {
            transform: "rotateY(90deg)"
          },
          '100%': {
            transform: "rotateY(180deg)"
          },

        },
        flip2: {
          '0%': {
            transform: "rotateY(0deg)"
          },
          '50%': {
            transform: "rotateY(90deg)"
          },
          '100%': {
            transform: "rotateY(180deg)"
          },

        },
      }
    },
  },
  plugins: [],
}
