/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./src/**/*.{astro,html}'],
  mode: 'jit',
	theme: {
		extend: {
      colors: {
        'text': '#e1e6f0',
        'text2': '#969eb0',
        'text3': '#666e7d',
        'background': '#10141a',
        'background-2': '#151b24',
        'accent': '#1c232e',
        'primary': '#61afef',
        'primary2': '#8875e0',
      },
      dropShadow: {
        glow: [
          "0px 0px 7px #2f80b5"
        ],
        black: [
          "0px 0px 10px #000000"
        ],
      },
      fontFamily: {
        rubik: 'rubik',
      },
      animation: {
        title: "title 1.5s infinite",
        typing: "typing 2s steps(40)",
        blink: "blink 0.75s infinite"
      },
      keyframes: {
        typing: {
          from: {
            width: "0",
            visibility: "hidden"
          },
          to: {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            opacity: "0%"
          },
          "100%": {
            opacity: "100%"
          }
        }
      }
    },
	},
	plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
          'opacity': (value) => ({
            opacity: value,
          }),
        },
        { values: theme('textShadow') },
        { values: theme('transitionDelay') },
        { values: theme('opacity') }
      )
    }),
  ],
}
