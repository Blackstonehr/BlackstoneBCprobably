import React from 'react';
import { Container } from './packages/ui/src/components/Container'; // Adjusted path for root location
import { colors, glass, spring, transition } from '@liquid/tokens';

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
    id: 'tokyo-manga',
    location: 'Tokyo, Japan',
    age: '18+',
    duration: 'Semester',
    tag: 'Creative',
    price: 'Custom',
    features: ['Drawing Workshops', 'Industry Visits', 'Portfolio Dev'],
  },
  {
    id: 'seoul-k-immersion',
    location: 'Seoul, Korea',
    age: '15-19',
    duration: '4 Weeks',
    tag: 'Trending',
    price: 'From $3,450',
    features: ['K-Culture Focus', 'University Campus', 'Urban Exploration'],
  },
  {
    id: 'manga-intensive',
    location: 'Kyoto, Japan',
    age: '18+',
    duration: 'Semester',
    tag: 'Creative',
    price: 'Custom',
    features: ['Drawing Workshops', 'Industry Visits', 'Portfolio Dev'],
  },
];

export default function ProgramGrid() {
  return (
    <section className="py-24 bg-midnight">
      <Container>
        <div className="mb-16 flex items-end justify-between border-b border-bonewhite/10 pb-8">
          <div>
            <h2
              className="text-4xl font-bold italic uppercase"
              style={{
                color: colors.bonewhite,
                letterSpacing: '-0.04em',
                lineHeight: '0.85'
              }}
            >
              Deployments
            </h2>
            <p className="opacity-60" style={{ color: colors.bonewhite }}>
              Select your destination for 2025.
            </p>
          </div>

          <div className="hidden md:block font-mono text-xs uppercase tracking-widest opacity-60" style={{ color: colors.bonewhite }}>
            Sorted by: Popularity // Region:
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.id}
              className="group p-8 border transition-all hover:shadow-2xl"
              style={{
                backgroundColor: glass.surface.medium,
                backdropFilter: `blur(${glass.blur.card})`,
                WebkitBackdropFilter: `blur(${glass.blur.card})`,
                borderColor: 'rgba(233, 218, 192, 0.12)',
              }}
            >
              <div className="flex justify-between items-start mb-12">
                <span
                  className="text-[10px] px-2 py-1 uppercase font-bold tracking-widest"
                  style={{ backgroundColor: colors.midnight, color: colors.bonewhite }}
                >
                  {p.tag}
                </span>
                <span className="font-mono font-bold text-sm" style={{ color: colors.bonewhite }}>
                  {p.price}
                </span>
              </div>
              <h3
                className="text-3xl font-bold mb-2"
                style={{
                  color: colors.bonewhite,
                  letterSpacing: '-0.04em',
                  lineHeight: '0.85'
                }}
              >
                {p.location}
              </h3>
              <p className="text-sm mb-8 opacity-60" style={{ color: colors.bonewhite }}>
                Ages {p.age} • {p.duration}
              </p>

              <ul className="space-y-3 border-t border-bonewhite/10 pt-6 mb-10">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs font-mono flex items-center gap-2 uppercase tracking-tight opacity-80"
                    style={{ color: colors.bonewhite }}
                  >
                    <span className="h-1 w-1" style={{ backgroundColor: colors.bonewhite }} /> {f}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-4 bg-bonewhite/10 font-bold text-sm uppercase transition-all"
                style={{
                  color: colors.bonewhite,
                  height: '56px', // Rule 5
                  fontSize: '16px' // Rule 5
                }}
              >
                View Dossier
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

