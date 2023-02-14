import type { Result } from 'global.types'

export default function Results({ results }: { results: Result[] }) {
	return (
		<div>
			{results.map((result) => (
				<div key={result.id}>{result.original_title}</div>
			))}
		</div>
	)
}
