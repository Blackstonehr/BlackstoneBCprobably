import Shell from '@/components/layout/shell'
import ProbationQCCard from '@/components/cards/probation-qc-card'
import TrainingExpiryCard from '@/components/cards/training-expiry-card'
import FundingWindowCard from '@/components/cards/funding-window-card'
import IncidentsCard from '@/components/cards/incidents-card'
import WellnessCard from '@/components/cards/wellness-card'

export default function AdminPage() {
	return (
		<Shell>
			<h1 className="text-2xl font-semibold">Admin Command Centre</h1>
			<section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<ProbationQCCard />
				<TrainingExpiryCard />
				<FundingWindowCard />
				<IncidentsCard />
				<WellnessCard />
			</section>
		</Shell>
	)
}
