import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@components': '/src/components',
				'@layouts': '/src/layouts',
				'@pages': '/src/pages',
				'@i18n': '/src/i18n',
				'@utils': '/src/utils',
				'@assets': '/src/assets',
				'@icons': '/src/icons',
				'@config': '/src/config'
			}
		}
	},

	i18n: {
		locales: ['ru', 'en'],
		defaultLocale: 'ru',
		routing: {
			prefixDefaultLocale: true
		}
	},

	integrations: [icon()]
})
