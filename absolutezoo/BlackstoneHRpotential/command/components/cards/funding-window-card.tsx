import React from 'react'

export default function FundingWindowCard({ title = 'Funding Window' }: { title?: string }) {
	return (
		<div className="p-4 border rounded">
			<h3 className="font-medium">{title}</h3>
			<p className="text-sm mt-2">No active funding windows.</p>
		</div>
	)
}
