/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		{
			pattern: /via-(blue|cyan|indigo)-(950)/,
		},
		{
			pattern: /border-(red|blue|green|yellow|purple|pink|orange)-(900|600)/,
			variants: ['hover']
		},
		{
			pattern: /bg-(red|blue|green|yellow|purple|pink|orange)-(900|600)/,
			variants: ['hover', 'before', 'hover:before']
		},
		{
			pattern: /shadow-(red|blue|green|yellow|purple|orange)-(900|500)/,
			variants: ['hover', 'hover:before']
		}
	],
	theme: {
		extend: {
			fontFamily: {
				'onest': ['Onest Variable', 'Onest', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
