export async function fetchRandomQuote() {
	try {
		const response = await fetch(
			'https://quote-garden.onrender.com/api/v3/quotes/random'
		)
		const data = await response.json()

		if (response.ok) {
			return data.data[0]
		} else {
			throw new Error(`Failed to fetch data: ${data.message}`)
		}
	} catch (error) {
		throw new Error(`An error occurred: ${error.message}`)
	}
}