/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		fontFamily: {
			Inter: ['Inter Thin'],
			IBMPlexSansThai: ['IBM Plex Sans Thai'],
		},
	},
	plugins: [require('tailwindcss-animate')],
}
