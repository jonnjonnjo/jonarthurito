/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  safelist: [
    { pattern: /text-kanagawa-/ },
    { pattern: /bg-kanagawa-/ },
    { pattern: /border-kanagawa-/ },
  ],
  theme: {
    extend: {
      colors: {
        kanagawa: {
          bgDark: '#1F1F28',
          bgDim: '#16161D',
          bgLight: '#2A2A37',
          bgHighlight: '#2D4F67',
          fg: '#DCD7BA',
          fgDim: '#727169',
          comment: '#54546D',
          red: '#C34043',
          orange: '#FFA066',
          yellow: '#C0A36E',
          green: '#76946A',
          teal: '#6A9589',
          cyan: '#7FB4CA',
          blue: '#7E9CD8',
          violet: '#957FB8',
          pink: '#D27E99',
        },
      },
      fontFamily: {
        sans: ['"Computer Modern Serif"', 'serif'],
        mono: ['"Computer Modern Typewriter"', 'monospace'],
      },
    },
  },
  plugins: [],
}
