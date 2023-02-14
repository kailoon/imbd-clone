import MenuItem from './MenuItem'

import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
	return (
		<div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
			<div className="flex">
				<MenuItem title="Home" address="/" Icon={AiFillHome} />
				<MenuItem title="About" address="/about" Icon={AiFillInfoCircle} />
			</div>
			<div className="flex items-center justify-end">
				<div className="mr-2">
					<DarkModeSwitch />
				</div>
				<Link href="/" className="mx-2">
					<h2 className="">
						<span className="font-bold bg-black py-2 px-4 rounded-full text-white mr-2 dark:text-black dark:bg-white">
							IMDb
						</span>
						<span className="text-slate-400 hidden sm:inline">Clone</span>
					</h2>
				</Link>
			</div>
		</div>
	)
}
