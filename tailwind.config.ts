import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#32CD32',
        'primary-hover': '#2db82d',
        'primary-click': '#2db82d',
	'black': '#47250E',
	'sub-gray': '#737373',

	'gradient-start': '#66FF66',
	'gradient-middle': '#32CD32',
	'gradient-end': '#228B22',
      },
      fontFamily: {
        rockwell: ['Rockwell', 'sans-serif'],
      },
      dropShadow: {
	'card': '0px 24px 24px rgba(149, 157, 165, 0.20)'
      },
      transitionProperty: {
	'max-height': 'max-height'
      },
      fontSize: {
	'h1': ['40px', {
	  letterSpacing: '-0.8px',
	  lineHeight: '48px'
	}],
	'h1-small': ['32px', {
	  letterSpacing: '-0.8px',
	  lineHeight: '40px'
	}],
      },
    },
  },
  plugins: [],
}
export default config
