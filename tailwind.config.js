const { fontFamily } = require('tailwindcss/defaultTheme');
const { colors } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1360px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
			},
			colors: {
				...colors,
				orange: '#ff8f00',
				greeen: '#33d69f',
				grey: '#dfe3fa',
				'dark-gold': '#533519',
				'dark-purple': '#373b53',
				purple: '#9277ff',
				'light-purple': '#494e6e',
				'light-bg': '#f8f8fb',
				'dark-bg': '#141625',
				'deep-purple': '#7d5cfa',
				red: '#ec5757',
				'light-gray': '#888eb0',
				'dark-dark-purple': '#1e2139',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
