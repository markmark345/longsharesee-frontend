/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			'red-primary': '#e28989',
			'blue-primary': '#1677ff',
			'yellow-primary': '#f9bd38',
			'deepSea-10': '#3cc0be',
			'deepSea-20': '#418ba6',
			'deepSea-30': '#36578f',
			'deepSea-40': '#373b7a',
			'deepSea-50': '#302c5a',
			'yellow-10': '#fff9ae',
			'yellow-20': '#f8ed62',
			'yellow-30': '#e9d700',
			'yellow-40': '#dab600',
			'yellow-50': '#a98600',
			'red-10': '#feeaea',
			'red-20': '#fec0c0',
			'red-30': '#feabab',
			'red-40': '#fe8181',
			'red-50': '#fe5757',
			'black-10': '#f5f5f5',
			'black-20': '#e5e5e5',
			'black-30': '#8a8a8a',
			'black-40': '#535152',
			'black-50': '#333132',
			'indigo-500': '#6366f1',
			black: '#000000',
			white: '#ffffff',
		},
		fontFamily: {
			Inter: ['Inter Thin'],
			IBMPlexSansThai: ['IBM Plex Sans Thai'],
		},
	},
	darkMode: 'class',
	plugins: [require('tailwindcss-animate'), nextui()],
}
