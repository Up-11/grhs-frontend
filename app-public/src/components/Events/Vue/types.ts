export interface IEventCard {
	id: string
	name: string
	date: string
	description: string
	imagePreview: string
	imageUrl: string
	content: Record<string, string>
}

export const events: IEventCard[] = [
	{
		id: '1',
		name: 'Масленица',
		date: '2025-03-20',
		description: 'A live music concert featuring local bands.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig',
		imagePreview:
			'https://akademiacoffee.com/ru/events/blinnaya_nedelya/Gi82ro1959.jpg',

		content: {
			line1:
				'Заглядывайте на пышные сливочные панкейки 🥞 Печём их по авторскому рецепту только в Масленицу с 24 февраля по 2 марта.',
			line2: 'На ваш выбор панкейки:',
			line3:
				'✨ с растопленным бельгийским шоколадом, бананом и колотым фундуком (450₽)',
			line4:
				'✨ со сметанным кремом, дополненным вареной сгущенкой и свежей голубикой (320₽)',
			line5: 'Всего за 40₽ можно добавить к панкейкам:',
			line6: 'Дополнительный блинчик',
			line7: 'Сметану',
			line8: 'Сгущеное молоко',
			line9: 'Ягодный мусс',
			line10: 'В порции 4 блинчика.',
			line11: 'Успейте попробовать!'
		}
	},
	{
		id: '2',
		name: 'Art Exhibition',
		date: '2025-03-10',
		description: 'An exhibition showcasing contemporary art.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/68b1e50b4dd4c95f92e43c635ad129e4/orig',
		imagePreview:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig',
		content: {
			line1: 'Discover stunning artworks by modern artists.',
			line2: 'Interactive sessions with the creators.',
			line3: 'Gallery open from 10 AM to 8 PM.'
		}
	},
	{
		id: '3',
		name: 'Food Festival',
		date: '2025-03-05',
		description: 'Taste a variety of cuisines from around the world.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/13944716/de176d4b6eacd1b2b44725d46f46f97b/orig',
		imagePreview:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig',
		content: {
			line1: 'A culinary journey through global flavors.',
			line2: 'Live cooking demonstrations.',
			line3: 'Exclusive dishes from top chefs.'
		}
	},
	{
		id: '4',
		name: 'Tech Conference',
		date: '2025-03-15',
		description: 'Join industry experts at the annual tech conference.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/6893e2441eacdfd532b4b6b9b8c521c0/orig',
		imagePreview:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig',
		content: {
			line1: 'Exploring the future of technology.',
			line2: 'Workshops, panels, and networking.',
			line3: 'Keynote speakers from top tech companies.'
		}
	},
	{
		id: '5',
		name: 'Charity Run',
		date: '2025-03-25',
		description: 'Participate in a charity run for a good cause.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/6893e2441eacdfd532b4b6b9b8c521c0/orig',
		imagePreview:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig',
		content: {
			line1: 'Run for a cause and support local charities.',
			line2: 'Multiple race categories available.',
			line3: 'Join the community and make a difference.'
		}
	},
	{
		id: '6',
		name: 'Cooking Class',
		date: '2025-01-10',
		description: 'Learn how to cook gourmet dishes with professional chefs.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/6893e2441eacdfd532b4b6b9b8c521c0/orig',
		imagePreview:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig',
		content: {
			line1: 'Master gourmet dishes with expert chefs.',
			line2: 'Hands-on experience in a professional kitchen.',
			line3: 'Includes recipe book and ingredients.'
		}
	},
	{
		id: '7',
		name: 'Fashion Show',
		date: '2025-02-18',
		description: 'Experience the latest trends at the fashion show.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/6893e2441eacdfd532b4b6b9b8c521c0/orig',
		imagePreview:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig',
		content: {
			line1: 'See the latest fashion trends on the runway.',
			line2: 'Featuring top designers and models.',
			line3: 'Exclusive collections and after-party.'
		}
	}
]
