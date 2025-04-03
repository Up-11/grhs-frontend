import type { TextWithLangs } from 'src/types/types'

export interface Category {
	id: string
	hrefId: string
	title: TextWithLangs
}
export interface IProductCard {
	id: string
	name: TextWithLangs
	description: TextWithLangs
	price: { value: number; max: number }
	image: string
	categoryId: string
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
