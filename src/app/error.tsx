'use client'

import { useEffect } from 'react'

export default function Error({
	error,
	reset
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])
	return (
		<div className="text-center py-20">
			<h2>Something went wrong!</h2>
			<button
				className="mt-4 rounded-full text-xs border border-gray-800 py-2 px-4"
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	)
}
