export interface IMenu {
	title: string
	id: string
}

export interface IProductCard {
	id: string
	name: string
	description: string
	price: { value: number; max: number }
	imageUrl: string
	category: string
	composition: string[]
	volumes: { value: number; max: number }
	nutrition: INutrition
}

export interface INutrition {
	calories: { value: number; max: number; title: NUTRITION.CALORIES }
	proteins: { value: number; max: number; title: NUTRITION.PROTEINS }
	fats: { value: number; max: number; title: NUTRITION.FATS }
	carbs: { value: number; max: number; title: NUTRITION.CARBS }
}

export enum NUTRITION {
	CALORIES = 'nutrition.calories',
	PROTEINS = 'nutrition.proteins',
	FATS = 'nutrition.fats',
	CARBS = 'nutrition.carbs'
}

export const products: IProductCard[] = [
	{
		id: '1',
		name: 'Вишневый Глинтвейн',
		description: 'Согревающий пряный напиток на основе вишневого сока.',
		price: { value: 249, max: 325 },
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig',
		category: 'authors-drinks',
		composition: ['Вишневый сок', 'Пряности', 'Апельсин'],
		volumes: { value: 250, max: 400 },
		nutrition: {
			calories: { value: 207, max: 233, title: NUTRITION.CALORIES },
			proteins: { value: 7, max: 8, title: NUTRITION.PROTEINS },
			fats: { value: 9, max: 10, title: NUTRITION.FATS },
			carbs: { value: 21, max: 25, title: NUTRITION.CARBS }
		}
	},
	{
		id: '2',
		name: 'Капучино Соленая Карамель',
		description:
			'Наш фирменный напиток, приготовленный на основе сиропа собственного производства.',
		price: { value: 269, max: 269 },
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/ad172dd14a26a0b9cbeb9c4476a5ddae/orig',
		category: 'coffee',
		composition: ['Эспрессо', 'Молоко', 'Соленая карамель'],
		volumes: { value: 300, max: 450 },
		nutrition: {
			calories: { value: 180, max: 220, title: NUTRITION.CALORIES },
			proteins: { value: 6, max: 7, title: NUTRITION.PROTEINS },
			fats: { value: 8, max: 10, title: NUTRITION.FATS },
			carbs: { value: 15, max: 20, title: NUTRITION.CARBS }
		}
	},
	{
		id: '3',
		name: 'Латте Маккиато',
		description: 'Воздушный латте с насыщенным кофейным вкусом.',
		price: { value: 289, max: 289 },
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/abcd1234efgh5678/orig',
		category: 'coffee',
		composition: ['Эспрессо', 'Молоко', 'Ванильный сироп'],
		volumes: { value: 300, max: 500 },
		nutrition: {
			calories: { value: 190, max: 240, title: NUTRITION.CALORIES },
			proteins: { value: 7, max: 9, title: NUTRITION.PROTEINS },
			fats: { value: 9, max: 11, title: NUTRITION.FATS },
			carbs: { value: 17, max: 22, title: NUTRITION.CARBS }
		}
	},
	{
		id: '4',
		name: 'Пряный Чай Латте',
		description: 'Чай латте с нотками корицы, имбиря и кардамона.',
		price: { value: 279, max: 279 },
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/qwerty56789/orig',
		category: 'seasonal-drinks',
		composition: ['Черный чай', 'Молоко', 'Пряности'],
		volumes: { value: 300, max: 450 },
		nutrition: {
			calories: { value: 160, max: 210, title: NUTRITION.CALORIES },
			proteins: { value: 5, max: 7, title: NUTRITION.PROTEINS },
			fats: { value: 6, max: 9, title: NUTRITION.FATS },
			carbs: { value: 18, max: 23, title: NUTRITION.CARBS }
		}
	},
	{
		id: '5',
		name: 'Матча Латте',
		description: 'Нежный латте на основе японского зеленого чая матча.',
		price: { value: 299, max: 299 },
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/matcha1234/orig',
		category: 'hot-drinks',
		composition: ['Матча', 'Молоко', 'Мёд'],
		volumes: { value: 250, max: 400 },
		nutrition: {
			calories: { value: 170, max: 210, title: NUTRITION.CALORIES },
			proteins: { value: 8, max: 10, title: NUTRITION.PROTEINS },
			fats: { value: 5, max: 8, title: NUTRITION.FATS },
			carbs: { value: 15, max: 19, title: NUTRITION.CARBS }
		}
	},
	{
		id: '6',
		name: 'Фраппе Карамель',
		description: 'Освежающий холодный кофейный напиток с карамелью.',
		price: { value: 289, max: 289 },
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/frappe1234/orig',
		category: 'cold-drinks',
		composition: ['Эспрессо', 'Молоко', 'Лёд', 'Карамель'],
		volumes: { value: 350, max: 500 },
		nutrition: {
			calories: { value: 220, max: 260, title: NUTRITION.CALORIES },
			proteins: { value: 6, max: 8, title: NUTRITION.PROTEINS },
			fats: { value: 7, max: 10, title: NUTRITION.FATS },
			carbs: { value: 22, max: 28, title: NUTRITION.CARBS }
		}
	}
]

export const sidebarItems: IMenu[] = [
	{
		title: 'Сезонные напитки',
		id: 'seasonal-drinks'
	},
	{
		title: 'Авторские напитки',
		id: 'authors-drinks'
	},
	{
		title: 'Кофе',
		id: 'coffee'
	},
	{
		title: 'Горячие напитки',
		id: 'hot-drinks'
	},
	{
		title: 'Холодные напитки',
		id: 'cold-drinks'
	}
]
