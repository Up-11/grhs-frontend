import { ROUTES } from '@config/routes'

import { defaultLang, languages, showDefaultLang, ui } from './ui'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in ui) return lang as keyof typeof ui
	return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key]
	}
}

export function useTranslatedPath(lang: keyof typeof ui) {
	return function translatePath(path: string, l: string = lang) {
		return `/${l}${path}`
	}
}

export function getRouteFromUrl(url: URL): string | undefined {
	const pathname = url.pathname
	const parts = pathname.split('/').filter(Boolean)
	const currentLang = parts[0]

	if (!Object.keys(languages).includes(currentLang)) {
		return undefined
	}

	const routePath = parts.slice(1).join('/')

	if (!routePath) {
		return ROUTES.home
	}

	return routePath
}
