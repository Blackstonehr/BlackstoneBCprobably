import React from 'react'

export default function WellnessCard({ title = 'Wellness' }: { title?: string }) {
	return (
		<div className="p-4 border rounded">
			<h3 className="font-medium">{title}</h3>
			<p className="text-sm mt-2">All staff wellbeing checks green.</p>
		</div>
	)
}
