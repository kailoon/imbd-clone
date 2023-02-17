'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBox() {
	const [searchTerm, setSearchTerm] = useState('')
	const router = useRouter()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		if (!searchTerm) return
		router.push(`/search/${searchTerm}`)
	}

	return (
		<form
			className="focus-within:ring-2 ring-blue-500 max-w-4xl mx-auto my-5 space-x-4 border border-gray-300 rounded-2xl w-full flex justify-between items-center py-2 px-2 focus-within:border-white"
			onSubmit={handleSubmit}
		>
			<input
				onChange={(e: React.FormEvent<HTMLInputElement>): void =>
					setSearchTerm(e.currentTarget.value)
				}
				type="text"
				value={searchTerm}
				placeholder="Search keywords..."
				className="placeholder:text-gray-500 w-full outline-none"
			/>
			<button
				className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200"
				type="submit"
				value="Search"
				disabled={!searchTerm}
			>
				<AiOutlineSearch width={32} className="" />
			</button>
		</form>
	)
}
