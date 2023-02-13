import Header from '@/components/Header'
import './globals.css'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="antialiased text-slate-600">
				<Header />
				{/* navbar */}
				{/* searchbox */}
				{children}
			</body>
		</html>
	)
}
