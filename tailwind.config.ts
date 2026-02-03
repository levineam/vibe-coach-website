import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#f97316',
        'brand-dark': '#ea580c',
        'accent': '#f97316',
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'dark-border': '#2d2d2d',
      },
      backgroundColor: {
        'dark': '#0a0a0a',
      },
      textColor: {
        'light': '#f5f5f5',
      }
    },
  },
  plugins: [],
}
export default config
