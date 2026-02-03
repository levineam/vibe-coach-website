import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#1e40af',
        'brand-dark': '#1e3a8a',
        'accent': '#f97316',
      }
    },
  },
  plugins: [],
}
export default config
