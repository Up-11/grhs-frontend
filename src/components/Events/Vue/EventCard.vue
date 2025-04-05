<script lang="ts" setup>
import { ROUTES } from '@config/routes'
import { useLocale } from '@i18n/useLocale'
import { formatUrl } from '@utils/formatUrl'
import { inject } from 'vue'

import type { IEventCard } from './types'

const props = defineProps<{ event: IEventCard }>()

const url = inject<URL>('url')
const { t, translatePath, lang } = useLocale(url!)
</script>

<template>
	<article
		class="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl"
	>
		<div class="aspect-[4/3] overflow-hidden">
			<img
				:src="formatUrl(event.image)"
				:alt="event.name[lang] || 'Изображение события'"
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				loading="lazy"
			/>
		</div>

		<div
			class="absolute gap-4 inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end"
		>
			<div class="text-white">
				<h3 class="text-xl font-bold line-clamp-1">
					{{ event.name[lang] }}
				</h3>

				<p class="mt-2 text-sm text-gray-200 line-clamp-2">
					{{ event.description[lang] }}
				</p>

				<a
					:href="translatePath(ROUTES.currentEvent(event.id))"
					class="mt-5 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
				>
					{{ t('event.button') }}
				</a>
			</div>
		</div>
	</article>
</template>
