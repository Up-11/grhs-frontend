import { ui } from '@i18n/ui'

export const getMonthTranslation = (month: string): keyof (typeof ui)['en'] => {
	for (const lang of Object.values(ui)) {
		for (const [key, value] of Object.entries(lang)) {
			if (value.toLowerCase() === month.toLowerCase()) {
				return key as keyof (typeof ui)['en']
			}
		}
	}
	console.warn(`Translation not found for: ${month}`)
	return 'month.january'
}
