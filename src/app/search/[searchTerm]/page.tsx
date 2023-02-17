import Results from '@/components/Results'
import { Result } from 'global.types'

const API_KEY = process.env.API_KEY

export default async function SearchPage({
	params
}: {
	params: { searchTerm: string }
}) {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`
	)
	if (!res.ok) {
		throw new Error('Error fetching data')
	}
	const data = await res.json()
	const results = data.results as Result[]

	return (
		<div>
			{results && results.length === 0 && <h1>No results found.</h1>}
			{results && <Results results={results} />}
		</div>
	)
}
