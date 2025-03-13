export const languages = {
	ru: 'RU',
	en: 'EN'
}

export const defaultLang = 'ru'

export const showDefaultLang = false

export const ui = {
	en: {
		'nav.menu': 'Menu',
		'nav.addresses': 'Addresses',
		'nav.events': 'Events',
		'nav.about': 'About us',
		'tooltip.lang': 'Change language',
		'event.button': 'More',
		'event.closest-title': 'Closest events',
		'event.past-title': 'Past events'
	},
	ru: {
		'nav.menu': 'Меню',
		'nav.addresses': 'Адреса',
		'nav.events': 'События',
		'nav.about': 'Кофейня',
		'tooltip.lang': 'Поменять язык',
		'event.button': 'Подробнее',
		'event.closest-title': 'Ближайшие события',
		'event.past-title': 'Прошедшие события'
	}
} as const
