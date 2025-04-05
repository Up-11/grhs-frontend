export const formatUrl = (url: string) => {
	const apiUrl = import.meta.env.API_URL_NO_PREFIX
	return `${apiUrl || 'http://localhost:4200/'}${url}`
}
