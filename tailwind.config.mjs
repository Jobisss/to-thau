import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				'thauane-black' : '#130000',
				'thauane-pink' : '#FD959E',
				'thauane-middle' : '#EF617A',
				'thauane-red' : '#C02820',
			},
			fontFamily : {
				style : ['Style Script', defaultTheme.fontFamily.sans],
				poppins : ['Poppins', defaultTheme.fontFamily.sans],
				sulfur : ['Sulphur Point', defaultTheme.fontFamily.sans],
			},
			dropShadow : { 
				glow : [
					"0 0px 20px rgba(255,255, 255, 0.35)",
      				"0 0px 65px rgba(255, 255,255, 0.2)"
				]
			}
		},
	},
	plugins: [],
}
