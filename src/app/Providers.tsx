'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

interface Props {
	children: React.ReactNode
}

export default function Providers({ children }: Props) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<div className="dark:bg-black dark:text-slate-200 text-slate-700 transition-colors duration-300 min-h-screen">
				{children}
			</div>
		</ThemeProvider>
	)
}
