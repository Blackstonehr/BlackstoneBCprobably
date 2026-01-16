import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'

const faqs = [
  {
    q: 'Is it safe?',
    a: 'Elite safety. 24/7 localized support, vetted homestays, and real-time GPS check-ins via our digital portal. We provide freedom with a safety net.',
  },
  {
    q: 'Why so transparent with prices?',
    a: "Because hidden fees are low-aesthetic. We believe in high-value, fixed-cost education. No 'Contact for Quote' traps.",
  },
  {
    q: 'Vancouver-specific support?',
    a: 'Yes. Our head office is in Vancouver. We manage pre-departure orientations in person, not just over Zoom.',
  },
]

export default function FrictionFAQ() {
  return (
    <Section className="bg-[#0a0f14] py-24">
      <Container className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-black italic text-[#E9DAC0] leading-[0.85] tracking-[-0.04em] uppercase">
            Zero <br /> Friction.
          </h2>
          <p className="mt-6 text-[#E9DAC0]/60 text-lg">
            Solving the concerns of parents and the desires of students in one
            unified interface.
          </p>
        </div>
        <div className="space-y-12">
          {faqs.map((f, i) => (
            <div key={i} className="group">
              <h4 className="text-xl font-bold text-[#E9DAC0] mb-2 group-hover:text-white transition-colors">
                {f.q}
              </h4>
              <p className="text-[#E9DAC0]/60 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
