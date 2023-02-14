import Link from 'next/link'
import { IconType } from 'react-icons'

interface Props {
	title: string
	address: string
	Icon: IconType
}
export default function MenuItem({ title, address, Icon }: Props) {
	return (
		<Link
			href={address}
			className="px-4 py-2 hover:text-red-500 text-black dark:text-slate-100 dark:hover:opacity-50 transiti"
		>
			<Icon className="md:hidden text-xl mx-auto mb-1" />
			<span className="font-medium hidden md:block text-sm">{title}</span>
		</Link>
	)
}
