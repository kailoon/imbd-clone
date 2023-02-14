import Results from '@/components/Results'
import type { Result } from 'global.types'

const API_KEY = process.env.API_KEY

interface Props {
	searchParams: {
		genre: string
	}
}

export default async function Home({ searchParams }: Props) {
	const genre = searchParams.genre || 'fetchTrending'
	const res = await fetch(
		`https://api.themoviedb.org/3/${
			genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
		}?api_key=${API_KEY}&language=en-US&page=1`,
		{ next: { revalidate: 10000 } }
	)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const data = await res.json()
	const results = data.results as Result[]

	return (
		<main>
			<Results results={results} />
		</main>
	)
}
