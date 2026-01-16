import React from 'react'

export default function ProbationQcCard({ title = 'Probation QC' }: { title?: string }) {
	return (
		<div className="p-4 border rounded">
			<h3 className="font-medium">{title}</h3>
			<p className="text-sm mt-2">No items pending review.</p>
		</div>
	)
}
