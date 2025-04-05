import { getLangFromUrl, useTranslatedPath, useTranslations } from './utils'

export const useLocale = (url: URL) => {
	const lang = getLangFromUrl(url)
	const t = useTranslations(lang)
	const translatePath = useTranslatedPath(lang)

	return {
		t,
		translatePath,
		lang
	}
}
