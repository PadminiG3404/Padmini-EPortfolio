import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
    './pages/**/*.{js,ts,jsx,tsx,html}',
    './components/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        rose: '#E2B6CF',
        lilac: '#C8B8E2',
        gold: '#F0E5D8',
        'light-gold': '#F9F3EB',
        charcoal: '#2D2D2D',
        smoke: '#FAFAFA',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
    },
  },
}
export default config