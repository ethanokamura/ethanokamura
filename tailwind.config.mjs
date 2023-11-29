/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  purge: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  mode: 'jit',
	theme: {
		extend: {
      colors: {
        'text': '#c5d5e3',
        'text2': '#707a82',
        'background': '#13151a',
        'accent': '#1f232e',
        'primary': '#54b6f7',
        'secondary': '#191c24',
        theme: {
          300: '#ac83fc',
          200: '#71de9e',
          100: '#de7571'
        }
      },
      dropShadow: {
        black: [
          "0px 0px 15px #000000"
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
        manrope: 'manrope',
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
