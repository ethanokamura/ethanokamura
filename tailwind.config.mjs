/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./src/**/*.{astro,html}'],
  mode: 'jit',
	theme: {
		extend: {
      colors: {
        'text': '#ffffff',
        'text2': '#969eb0',
        'text3': '#666e7d',
        'background': '#10141a',
        'accent': '#1d2530',
        'primary': '#61AFEF',
        'secondary': '#151b24',
        theme: {
          300: '#ac83fc',
          200: '#71de9e',
          100: '#de7571'
        },
        green: {
          100:  '#98C379',
        },
        red: {
          100: '#E06C75',
        },
      },
      dropShadow: {
        black: [
          "0px 0px 10px #0b0d0f"
        ],
        glow: [
          "0px 0px 7px #2f80b5"
        ],
        redglow: [
          "0px 0px 7px #d94b41"
        ],
        greenglow: [
          "0px 0px 7px #5df098"
        ]
      },
      fontFamily: {
        brains: 'brains',
        rubik: 'rubik',
      },
      animation: {
        title: "title 1.5s infinite",
        typing: "typing 2s steps(30)",
        blink: "blink 0.75s infinite"
      },
      keyframes: {
        title: {
          '0%': {
            textShadow: '0.02em 0.02em #d94b41, 0.04em 0.04em #f07f3a, 0.06em 0.06em #5df098, 0.08em 0.08em #3a83f0, 0.1em 0.1em #7d3fe8'
          },
          '60%': {
            textShadow: '0.04em 0.04em #d94b41, 0.08em 0.08em #f07f3a, 0.12em 0.12em #5df098, 0.16em 0.16em #3a83f0, 0.2em 0.2em #7d3fe8'
          },
          '100%': {
            textShadow: '0.02em 0.02em #d94b41, 0.04em 0.04em #f07f3a, 0.06em 0.06em #5df098, 0.08em 0.08em #3a83f0, 0.1em 0.1em #7d3fe8'
          },
        },
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
