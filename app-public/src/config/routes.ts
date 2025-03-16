export const ROUTES = {
	home: '/',
	menu: '/menu',
	simplifiedMenu: '/menu/simplified',
	addresses: '/addresses',
	events: '/events',
	currentEvent: (id: string) => `/event/${id}`,
	about: '/about'
}

export type AppRoutes = keyof typeof ROUTES
