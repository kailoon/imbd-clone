import { Result } from 'global.types'
import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'

export default function Card({ result }: { result: Result }) {
	return (
		<Link key={result.id} className="group py-4" href={`/movie/${result.id}`}>
			<Image
				src={`https://image.tmdb.org/t/p/original/${
					result.backdrop_path || result.poster_path
				}`}
				alt={result.original_title || 'movie poster'}
				width={440}
				height={240}
				priority
				className="rounded-md group-hover:opacity-50 transition-all duration-200"
				placeholder="blur"
				blurDataURL="/spinner.svg"
				style={{
					maxWidth: '100%',
					height: 'auto'
				}}
			/>
			<div className="mt-2">
				<p className="line-clamp-2 text-sm text-gray-500 mb-1">
					{result.overview}
				</p>
				<h2 className="font-bold">{result.title || result.name}</h2>
				<p className="flex items-center text-sm text-gray-500">
					{result.release_date || result.first_air_date}{' '}
					<FiThumbsUp className="mr-1 ml-3" /> {result.vote_count}
				</p>
			</div>
		</Link>
	)
}
