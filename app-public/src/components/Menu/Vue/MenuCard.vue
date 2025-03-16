<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'

import ProductModal from './ProductModal.vue'
import type { IProductCard } from './types'

defineProps<{ item: IProductCard }>()

const url = typeof window !== 'undefined' ? new URL(window.location.href) : null

const { t } = useLocale(url!)
</script>

<template>
	<div class="w-[250px] max-h-[350px] flex flex-col cursor-default gap-2">
		<img :src="item.imageUrl" alt="" width="250px" />
		<div class="flex flex-col gap-1">
			<h3 class="font-semibold line-clamp-2">{{ item.name }}</h3>
			<h4 class="text-gray-500 line-clamp-3">
				{{ item.description }}
			</h4>
		</div>
		<div class="flex justify-between mt-2 items-center">
			<p class="font-medium">{{ t('menu.button.from') }} {{ item.price }}₽</p>
			<ProductModal>
				<button
					class="cursor-pointer text-sm text-green-950 px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
				>
					{{ t('menu.button.more') }}
				</button>
			</ProductModal>
		</div>
	</div>
</template>
