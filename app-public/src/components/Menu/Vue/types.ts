export interface IMenu {
	title: string
	id: string
}

export interface IProductCard {
	id: string
	name: string
	description: string
	price: number
	imageUrl: string
	category: string
}

export const products: IProductCard[] = [
	{
		id: '1',
		name: 'Вишневый Глинтвейн',
		description: 'Согревающий пряный напиток на основе вишневого сока.',
		price: 249,
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/1530321/5175a61853059a2c83e140c047008066/orig',
		category: 'authors-drinks'
	},
	{
		id: '2',
		name: 'Капучино Соленая Карамель',
		description:
			'Наш фирменный напиток приготовленный на основе сиропа собственного',
		price: 269,
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/ad172dd14a26a0b9cbeb9c4476a5ddae/orig',
		category: 'coffee'
	},
	{
		id: '3',
		name: 'Капучино Соленая Карамель',
		description:
			'Наш фирменный напиток приготовленный на основе сиропа собственного',
		price: 269,
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/ad172dd14a26a0b9cbeb9c4476a5ddae/orig',
		category: 'coffee'
	},
	{
		id: '4',
		name: 'Капучино Соленая Карамель',
		description:
			'Наш фирменный напиток приготовленный на основе сиропа собственного',
		price: 269,
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/ad172dd14a26a0b9cbeb9c4476a5ddae/orig',
		category: 'seasonal-drinks'
	},
	{
		id: '5',
		name: 'Капучино Соленая Карамель',
		description:
			'Наш фирменный напиток приготовленный на основе сиропа собственного',
		price: 269,
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/ad172dd14a26a0b9cbeb9c4476a5ddae/orig',
		category: 'coffee'
	},
	{
		id: '6',
		name: 'Капучино Соленая Карамель',
		description:
			'Наш фирменный напиток приготовленный на основе сиропа собственного',
		price: 269,
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/ad172dd14a26a0b9cbeb9c4476a5ddae/orig',
		category: 'hot-drinks'
	},
	{
		id: '7',
		name: 'Капучино Соленая Карамель',
		description:
			'Наш фирменный напиток приготовленный на основе сиропа собственного',
		price: 269,
		imageUrl:
			'https://avatars.mds.yandex.net/get-sprav-products/944742/ad172dd14a26a0b9cbeb9c4476a5ddae/orig',
		category: 'cold-drinks'
	}
]
