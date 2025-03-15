export interface IEventCard {
	id: string
	name: string
	date: string
	description: string
	imageUrl: string
}

export const events: IEventCard[] = [
	{
		id: '1',
		name: 'Music Concert',
		date: '2025-03-20',
		description: 'A live music concert featuring local bands.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig'
	},
	{
		id: '2',
		name: 'Art Exhibition',
		date: '2025-03-10',
		description: 'An exhibition showcasing contemporary art.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/68b1e50b4dd4c95f92e43c635ad129e4/orig'
	},
	{
		id: '3',
		name: 'Food Festival',
		date: '2025-03-05',
		description: 'Taste a variety of cuisines from around the world.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/13944716/de176d4b6eacd1b2b44725d46f46f97b/orig'
	},
	{
		id: '4',
		name: 'Tech Conference',
		date: '2025-03-15',
		description: 'Join industry experts at the annual tech conference.',
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/6893e2441eacdfd532b4b6b9b8c521c0/orig'
	},
	{
		id: '5',
		name: 'Charity Run',
		date: '2025-03-25',
		description: 'Participate in a charity run for a good cause.',

		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/6893e2441eacdfd532b4b6b9b8c521c0/orig'
	},
	{
		id: '6',
		name: 'Cooking Class',
		date: '2025-01-10',
		description: 'Learn how to cook gourmet dishes with professional chefs.',

		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/6893e2441eacdfd532b4b6b9b8c521c0/orig'
	},
	{
		id: '7',
		name: 'Fashion Show',
		date: '2025-02-18',
		description: 'Experience the latest trends at the fashion show.',

		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/2773996/6893e2441eacdfd532b4b6b9b8c521c0/orig'
	}
]
