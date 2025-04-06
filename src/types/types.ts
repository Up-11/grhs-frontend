export interface MainBlockType {
	image: string
	title: TextWithLangs
	description: TextWithLangs
	imageSide: ImageSide
	position: number
}

export interface IMainCard {
	title: TextWithLangs
	description: TextWithLangs
	link: string
	image: string
}

export type ImageSide = 'left' | 'right'

export type EventContent = Record<string, TextWithLangs>

export type TextWithLangs = {
	ru: string
	en: string
}

export type MinMaxValue = {
	value: number
	max: number
}

export type Nutrition = {
	calories: {
		value: number
		max: number
		title: NUTRITION.CALORIES
	}
	proteins: {
		value: number
		max: number
		title: NUTRITION.PROTEINS
	}
	fats: {
		value: number
		max: number
		title: NUTRITION.FATS
	}
	carbohydrates: {
		value: number
		max: number
		title: NUTRITION.CARBS
	}
}

export enum NUTRITION {
	CALORIES = 'nutrition.calories',
	PROTEINS = 'nutrition.proteins',
	FATS = 'nutrition.fats',
	CARBS = 'nutrition.carbs',
}
