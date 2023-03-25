/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		fontFamily: {
      sans: ['IBM Plex Sans', 'Segoe UI', 'Cantarell', 'sans-serif'],
			mono: ['Iosevka', 'JetBrains Mono', 'Cascadia Code', 'Ubuntu Mono', 'Roboto Mono', 'Lucida Console', 'Courier', 'monospace']
    },
		fontWeight: {
			bold: '600'
		}
	},
	plugins: [
		require('@catppuccin/tailwindcss'),
	],
}
