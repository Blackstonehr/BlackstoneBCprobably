import Section from '../layout/Section'
import Container from '../layout/Container'

const programs = [
  {
    id: 'tokyo-immersion',
    location: 'Tokyo, Japan',
    age: '14-18',
    duration: '3-7 Weeks',
    tag: 'High School',
    price: 'From $3,235',
    features: ['Intense Language', 'Homestay Experience', 'Cultural Quests'],
  },
  {
    id: 'seoul-k-immersion',
    location: 'Seoul, Korea',
    age: '15 19',
    duration: '4 Weeks',
    tag: 'Trending',
    price: 'From $3,450',
    features: ['K-Culture Focus', 'University Campus', 'Urban Exploration'],
  },
  {
    id: 'manga-intensive',
    location: 'Tokyo, Japan',
    age: '18+',
    duration: 'Semester',
    tag: 'Creative',
    price: 'Custom',
    features: ['Drawing Workshops', 'Industry Visits', 'Portfolio Dev'],
  },
]

export default function ProgramGrid() {
  return (
    <Section className="bg-[#0a0f14]">
      <Container>
        <div className="mb-16 flex items-end justify-between border-b border-[#E9DAC0]/10 pb-8">
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] leading-[0.85] italic text-[#E9DAC0] uppercase">
              Deployments
            </h2>
            <p className="text-[#E9DAC0]/60">
              Select your destination for 2025.
            </p>
          </div>
          <div className="hidden md:block font-mono text-xs text-[#E9DAC0]/60 uppercase tracking-widest">
            Sorted by: Popularity // Region: 
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.id}
              className="group bg-[#E9DAC0]/[0.16] backdrop-blur-[24px] p-8 border border-[#E9DAC0]/[0.12] hover:border-[#E9DAC0] transition-all hover:shadow-2xl"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="bg-[#00050a] text-[#E9DAC0] text-[10px] px-2 py-1 uppercase font-bold tracking-widest">
                  {p.tag}
                </span>
                <span className="text-[#E9DAC0] font-mono font-bold text-sm">
                  {p.price}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-[#E9DAC0] mb-2 tracking-[-0.04em] leading-[0.85]">
                {p.location}
              </h3>
              <p className="text-sm text-[#E9DAC0]/60 mb-8">
                Ages {p.age} • {p.duration}
              </p>

              <ul className="space-y-3 border-t border-[#E9DAC0]/10 pt-6 mb-10">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs font-mono flex items-center gap-2 uppercase tracking-tight text-[#E9DAC0]/80"
                  >
                    <span className="h-1 w-1 bg-[#E9DAC0]" /> {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-[#E9DAC0]/10 text-[#E9DAC0] group-hover:bg-[#E9DAC0] group-hover:text-[#00050a] font-bold text-sm uppercase transition-all">
                View Dossier
              </button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
