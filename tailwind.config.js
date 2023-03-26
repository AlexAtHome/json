/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		fontFamily: {
      sans: ['Rubik', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Ubuntu', 'Cantarell', 'Comic Sans MS', 'sans-serif'],
			mono: ['JetBrains Mono', 'Ubuntu Mono', 'Roboto Mono', 'Lucida Console', 'Courier', 'monospace']
    },
	},
	plugins: [
		require('@catppuccin/tailwindcss'),
	],
}
