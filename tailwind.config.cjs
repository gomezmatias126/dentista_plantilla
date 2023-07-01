/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container:{
			center:true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
				xl: '3rem',
				'2xl': '4rem',
			}
		},
		colors:{
			transparent: 'transparent',
      current: 'currentColor',
			'light':{
				DEFAULT:'#FFF9FD',
				celeste:'#D4E4F4'
			},
			'accent':{
				DEFAULT:'#44C6E9',
				dark:'#2977D5'
			},
			'grey':{
				DEFAULT:'#666666',
				text:'#BBBBBB',
				light:'#DDDDDD'
			},
			'dark': {
				DEFAULT:'#252525',
				blue: '#00296D',
			}
		},
		extend: {
			fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      }
		}
	},
	plugins: [
    function ({ addComponents}) {
      addComponents({
        '.btn': {
					display: 'flex',
					gap: '16px',
					background: '#44C6E9',
					width: 'fit-content',
    			flexDirection: 'row',
    			justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '1.5rem',
					fontWeight: 'semi-bold'
        }
      })
    }
	],
}
