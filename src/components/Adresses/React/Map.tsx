import { load } from '@2gis/mapgl'
import { MapWrapper } from './MapWrapper'
import { useEffect, useRef, useState } from 'react'
import type { Map } from '@2gis/mapgl/types'
import { MapLayout } from './MapLayout'
import axios from 'axios'

interface ApiResponse {
	meta: {}
	result: {
		items: IResponseItem[]
	}
	total: number
}

export interface IResponseItem {
	address_name: string
	external_content:
		| {
				main_photo_url?: string | undefined
		  }[]
		| undefined
	full_address_name: string
	id: string
	name: string

	point: {
		lat: number
		lon: number
	}
}

export const GMap = () => {
	const mapRef = useRef<Map | null>(null)
	const apiLoadedRef = useRef<boolean>(false)
	const [center, setCenter] = useState([92.859836, 56.023572])

	const [items, setItems] = useState<IResponseItem[]>([])

	const changeCenter = (newCenter: number[]) => {
		if (center !== newCenter) {
			setCenter(newCenter)
		}
	}
	const MAX_REQUESTS = 5

	const fetchData = async () => {
		const mapgl = await load()

		if (!apiLoadedRef.current) return

		const promises = []
		for (let page = 1; page <= MAX_REQUESTS; page++) {
			promises.push(
				axios
					.get(
						`https://catalog.api.2gis.com/3.0/items?q=Green%20House&location=${center[0]}%2C${center[1]}&key=b5ad917c-78ca-4c9d-9265-44d22d87ffa7&page_size=10&fields=items.point,items.external_content,items.full_address_name,items.org&radius=1000&page=${page}`
					)
					.then(response => {
						if (response.status !== 200) {
							throw new Error('Network response was not ok')
						}

						return response.data
					})
					.catch(error => {
						console.error('Fetch error:', error)
					})
			)
		}

		try {
			const responses = await Promise.all(promises)

			const mergedItems = responses
				.filter(
					response => response && response.result && response.result.items
				)
				.flatMap(response => response.result.items)
				.filter(item => !items.some(prevItem => prevItem.id === item.id))

			setItems(prev => [...prev, ...mergedItems])

			let coords: [number, number][] = []
			mergedItems.forEach(item => {
				coords.push([item.point.lon, item.point.lat])
			})

			coords.forEach(coord => {
				new mapgl.Marker(mapRef.current!, {
					coordinates: coord,
					icon: '/green-icon.svg',
				})
			})
		} catch (error) {
			console.error('Error while fetching data:', error)
		}
	}
	useEffect(() => {
		const initializeMap = async () => {
			const mapglAPI = await load()
			mapRef.current = new mapglAPI.Map('map-container', {
				center: center,
				zoom: 15,
				key: 'e88c4907-b9b7-469d-9f97-80c43198debd',
			})
			apiLoadedRef.current = true

			/*   mapRef.current.on('centerend', (e) => {
                changeCenter(mapRef.current!.getCenter()); 
            });  */
		}

		initializeMap()

		return () => {
			if (mapRef.current) {
				mapRef.current.destroy()
			}
		}
	}, [])

	useEffect(() => {
		fetchData()
	}, [center])

	return (
		<div style={{ width: '100%', height: '100%' }}>
			<MapLayout items={items} />
			<MapWrapper />
		</div>
	)
}
