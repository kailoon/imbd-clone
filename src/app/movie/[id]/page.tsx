import { Result } from 'global.types'
import Image from 'next/image'
const API_KEY = process.env.API_KEY

const getMovie = async (movieId: string): Promise<Result> => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
	)
	return res.json()
}

export default async function MoviePage({
	params
}: {
	params: { id: string }
}) {
	const movieId = params.id
	const movie = await getMovie(movieId)

	return (
		<div className="w-full flex p-4 md:py-8 flex-col md:flex-row items-center content-center md:space-x-6">
			<Image
				src={`https://image.tmdb.org/t/p/original/${
					movie.backdrop_path || movie.poster_path
				}`}
				alt={movie.original_title || 'movie poster'}
				width={440}
				height={240}
				priority
				className="rounded-lg"
				placeholder="blur"
				blurDataURL="/spinner.svg"
				style={{
					maxWidth: '100%',
					height: '100%'
				}}
			/>

			<div className="grid space-y-4">
				<h1 className="text-2xl font-medium text-black dark:text-white">
					{movie.original_title}
				</h1>
				<p className="text-sm text-gray-500">{movie.overview}</p>
				<p className="text-sm text-gray-500">
					Date Released: {movie.release_date || movie.first_air_date}
				</p>
				<p className="text-sm text-gray-500">Votes: {movie.vote_count}</p>
			</div>
		</div>
	)
}
