import type { Result } from 'global.types'
import Card from './Card'

export default function Results({ results }: { results: Result[] }) {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
			{results.map((result) => (
				<Card result={result} key={result.id} />
			))}
		</div>
	)
}
