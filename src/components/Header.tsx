import MenuItem from './MenuItem'

import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
	return (
		<div className="flex justify-between items-center p-2 max-w-6xl">
			<div className="flex">
				<MenuItem title="home" address="/" Icon={AiFillHome} />
				<MenuItem title="about" address="/about" Icon={AiFillInfoCircle} />
			</div>
			<div className="flex space-x-5 items-center">
				<DarkModeSwitch />
				<Link href="/" className="mr-2">
					<h2 className="text-xl">
						<span className="font-bold bg-black py-1 px-2 rounded-lg text-white mr-2 dark:text-black dark:bg-white">
							IMDb
						</span>
						<span className="text-xl hidden sm:inline">Clone</span>
					</h2>
				</Link>
			</div>
		</div>
	)
}
