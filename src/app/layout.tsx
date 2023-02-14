import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Providers>
					<Header />
					{/* navbar */}
					{/* searchbox */}
					{children}
				</Providers>
			</body>
		</html>
	)
}
