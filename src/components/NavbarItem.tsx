'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Props {
	title: string
	param: string
}

export default function NavbarItem({ title, param }: Props) {
	const searchParams = useSearchParams()
	const genre = searchParams.get('genre')

	return (
		<Link
			href={`/?genre=${param}`}
			className={`${
				genre &&
				genre === param &&
				'bg-black text-white border-0 dark:bg-white dark:text-black'
			} rounded-3xl shadow-[0_0_1px_0.5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_1px_0.5px_rgba(255,255,255,0.3)] px-4 py-2 transition-colors text-xs`}
		>
			{title}
		</Link>
	)
}
