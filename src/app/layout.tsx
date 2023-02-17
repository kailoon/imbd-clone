import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from './Providers'
import { Inter } from '@next/font/google'
import SearchBox from '@/components/SearchBox'

const inter = Inter({
	variable: '--font-inter',
	display: 'swap',
	subsets: ['latin']
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<body className="antialiased">
				<Providers>
					<Header />
					<Navbar />
					<SearchBox />
					<div className="max-w-4xl mx-auto p-4">{children}</div>
				</Providers>
			</body>
		</html>
	)
}
