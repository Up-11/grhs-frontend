import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue';

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

    integrations: [icon(), vue()],
    output: 'server',
    adapter: node({
        mode: 'standalone'
    })
})