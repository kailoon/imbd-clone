import MenuItem from './MenuItem'

import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'

export default function Header() {
	return (
		<div className="flex justify-between items-center mx-2 max-w-6xl">
			<div className="inline-flex">
				<MenuItem title="home" address="/" Icon={AiFillHome} />
				<MenuItem title="about" address="/about" Icon={AiFillInfoCircle} />
			</div>
			<div>
				<Link href="/">
					<h2 className="text-2xl">
						<span className="font-bold bg-blue-600 py-1 px-2 rounded-lg text-white mr-1">
							IMDb
						</span>
						<span className="text-xl hidden sm:inline">Clone</span>
					</h2>
				</Link>
			</div>
		</div>
	)
}
