import React from 'react'

export type Priority = {
	level: 'low' | 'medium' | 'high'
	label?: string
}

export default function PriorityCard({ level, label }: Priority) {
	const color = level === 'high' ? 'text-red-600' : level === 'medium' ? 'text-yellow-600' : 'text-green-600'
	return (
		<div className="flex items-center gap-2">
			<span className={`${color} font-semibold`}>{level.toUpperCase()}</span>
			{label && <span className="text-sm text-muted">{label}</span>}
		</div>
	)
}

