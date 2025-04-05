import node from '@astrojs/node'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

export default defineConfig({
	viewTransitions: true,
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
				'@config': '/src/config',
			},
		},
	},

	i18n: {
		locales: ['ru', 'en'],
		defaultLocale: 'ru',
		routing: {
			prefixDefaultLocale: true,
		},
	},

	integrations: [icon(), vue({ devtools: true }), react()],
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),

	server: {
		host: true,
	},
})
