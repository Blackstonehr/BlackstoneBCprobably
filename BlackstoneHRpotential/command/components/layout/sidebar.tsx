'use client'

import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
	return (
		<aside className="w-60 bg-gray-50 border-r p-4">
			<h3 className="font-bold">Command Centre</h3>
			<nav className="mt-4 flex flex-col gap-2">
				<Link href="/admin" className="text-sm hover:text-burgundy-500 transition-colors">Admin</Link>
				<Link href="/owner" className="text-sm hover:text-burgundy-500 transition-colors">Owner</Link>
				<Link href="/employee" className="text-sm hover:text-burgundy-500 transition-colors">Employee</Link>
			</nav>
		</aside>
	)
}
