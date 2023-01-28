/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				'fit': 'repeat(auto-fit, minmax(24ch, 1fr))',
			  }
		},
	},
	plugins: [],
}
