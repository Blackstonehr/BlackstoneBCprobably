'use client'

import React from 'react'

export default function Topbar() {
	return (
		<header className="h-14 flex items-center justify-between px-6 border-b bg-white shadow-sm">
			<div className="font-semibold text-burgundy-600">Blackstone Command</div>
			<div className="text-sm text-gray-600">User Portal</div>
		</header>
	)
}
