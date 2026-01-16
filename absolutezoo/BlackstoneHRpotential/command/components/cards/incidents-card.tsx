import React from 'react'
import PriorityCard from '../priority-card'

export default function IncidentsCard({ title = 'Incidents' }: { title?: string }) {
	return (
		<div className="p-4 border rounded">
			<h3 className="font-medium">{title}</h3>
			<div className="mt-2">
				<PriorityCard level="high" label="3 open incidents" />
			</div>
		</div>
	)
}
