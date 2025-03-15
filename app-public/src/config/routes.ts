export const ROUTES = {
	home: '/',
	menu: '/menu',
	addresses: '/addresses',
	events: '/events',
	currentEvent: (id: string) => `/events/${id}`,
	about: '/about'
}

export type AppRoutes = keyof typeof ROUTES
