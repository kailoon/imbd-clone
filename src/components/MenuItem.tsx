import Link from 'next/link'
import { IconType } from 'react-icons'

interface Props {
	title: string
	address: string
	Icon: IconType
}
export default function MenuItem({ title, address, Icon }: Props) {
	return (
		<Link href={address} className="px-8 py-4 hover:text-blue-500">
			<Icon className="text-2xl mx-auto" />
			<span className="font-medium hidden sm:inline uppercase">{title}</span>
		</Link>
	)
}
