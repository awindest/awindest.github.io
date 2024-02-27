import { error } from '@sveltejs/kit'
export async function load({ fetch }) {
	// try {
	// 	const response = await fetch('api/works')
	// 	const data = await response.json()
	// 	console.log('IN SERVER.JS', data)
	// 	return { data }
	// } catch {
	// 	throw error(404, `Could not get works.csv via api.`)
	// }
}
