import './globals.css'
import React, { Suspense } from 'react'

export const metadata = {
	title: 'Blackstone Command',
	description: 'Admin command centre',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Suspense fallback={null}>
					{children}
				</Suspense>
			</body>
		</html>
	)
}

