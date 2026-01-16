import Container from "../layout/Container";

export default function CinematicHero() {
  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#00050a]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-in-out"
        >
          {/* Use a high-quality stock loop or your own 4K Tokyo footage */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-city-lights-at-night-11-large.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00050a] via-transparent to-[#00050a]/40" />
      </div>

      <Container className="relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#E9DAC0]/30 bg-[#E9DAC0]/5 px-4 py-2 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E9DAC0] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E9DAC0]"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E9DAC0]">
              Vancouver — Tokyo — Seoul // 2025
            </span>
          </div>
          
          <h1 className="text-7xl md:text-[120px] font-black text-[#E9DAC0] leading-[0.85] tracking-[-0.04em] italic uppercase">
            Not a <br />
            <span className="text-[#E9DAC0] underline decoration-4 underline-offset-8">Program.</span> <br />
            A Narrative.
          </h1>

          <p className="max-w-xl text-xl text-[#E9DAC0]/60 font-medium leading-relaxed">
            LanguBridge is the elite interface for Vancouver youth entering the Asian sphere. 
            High-aesthetic, high-impact, and fully transparent.
          </p>

          <div className="flex flex-wrap gap-6 pt-6">
            <button className="group relative overflow-hidden bg-[#E9DAC0] px-10 py-5 text-[#00050a] font-black uppercase tracking-tighter transition-all hover:scale-105">
              <span className="relative z-10">Deploy Now</span>
              <div className="absolute inset-0 translate-y-full bg-white transition-transform group-hover:translate-y-0" />
            </button>
            <button className="border border-[#E9DAC0]/20 px-10 py-5 text-[#E9DAC0] font-bold backdrop-blur-md hover:bg-[#E9DAC0] hover:text-[#00050a] transition-all">
              Watch The Reel
            </button>
          </div>
        </div>
      </Container>

      {/* Aesthetic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-[#E9DAC0]/40 uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#E9DAC0] to-transparent" />
      </div>
    </div>
  );
}