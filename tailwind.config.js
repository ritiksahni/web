/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter Variable', 'sans-serif'],
				quicksand: ['Quicksand Variable', 'sans-serif'],
				garamond: ['EB Garamond', 'serif'],
				writer: ['Writer', 'serif'],
				rustlerBarter: ['Rustler Barter', 'serif'],
			},
		},
	},
	plugins: [],
};
