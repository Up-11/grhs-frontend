import type { TextWithLangs } from 'src/types/types'

export interface IEventCard {
	id: string
	name: TextWithLangs
	date: string
	description: TextWithLangs
	image: string
	content: Record<string, string>
}
