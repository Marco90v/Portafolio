/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		{
			pattern: /border-(red|blue|green|yellow|purple|pink|orange)-(900|600|500|400|300|200|100)/,
			variants: ['hover', 'before']
		},
		{
			pattern: /bg-(red|blue|green|yellow|purple|pink|orange)-(900|600|500|400|300|200|100)/,
			variants: ['hover', 'before']
		}
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
