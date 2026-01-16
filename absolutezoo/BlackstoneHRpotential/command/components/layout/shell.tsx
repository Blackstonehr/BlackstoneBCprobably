import React from 'react'
import Sidebar from './sidebar'
import Topbar from './topbar'

export default function Shell({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex">
			<Sidebar />
			<div className="flex-1">
				<Topbar />
				<div className="p-6">{children}</div>
			</div>
		</div>
	)
}
