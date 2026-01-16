import React from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import { dossiers } from "./content";


export default function DossierGrid(): React.JSX.Element {

  return (
    <Section className="bg-[#00050a] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#E9DAC0]/10 border border-[#E9DAC0]/10">
          {dossiers.map((d, i) => (
            <div key={d.code} className="group relative bg-[#00050a] p-12 transition-all hover:bg-[#E9DAC0]/5">
              <div className="flex flex-col h-full">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#E9DAC0] tracking-[0.3em] uppercase">{d.code}</span>
                  <span className="text-[#E9DAC0]/20 font-black italic text-4xl">0{i + 1}</span>
                </div>

                <h3 className="text-4xl font-bold text-[#E9DAC0] mb-2 italic tracking-[-0.04em] leading-[0.85]">{d.title}</h3>
                <p className="text-[#E9DAC0] text-sm font-bold uppercase tracking-widest mb-6">{d.tier}</p>

                <div className="space-y-4 mb-12">
                  <p className="text-[#E9DAC0]/60 text-sm leading-relaxed">{d.focus}</p>
                  <div className="flex flex-wrap gap-2">
                    {d.tags.map(t => (
                      <span key={t} className="border border-[#E9DAC0]/10 px-2 py-1 text-[9px] text-[#E9DAC0]/40 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-[#E9DAC0]/5 flex items-end justify-between">
                  <div>
                    <span className="block text-[10px] text-[#E9DAC0]/40 uppercase mb-1">MSRP Starting At</span>
                    <span className="text-2xl font-bold text-[#E9DAC0] font-mono">{d.price}</span>
                  </div>
                  <button className="h-12 w-12 rounded-full border border-[#E9DAC0] flex items-center justify-center text-[#E9DAC0] hover:bg-[#E9DAC0] hover:text-[#00050a] transition-all">
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}