import { HeroSection } from "@/components/feature/HeroSection";
import { DirectiveGrid } from "@/components/feature/DirectiveGrid";
import { KPIBar } from "@/components/feature/KPIBar";
import { ThreeDGlobe } from "@/components/feature/3DGlobe";
import { OperationsBrief } from "@/components/feature/OperationsBrief";
import { ServicesGrid } from "@/components/feature/ServicesGrid";
import { ContactSection } from "@/components/feature/ContactSection";
import { TopNav } from "@/components/ui/TopNav";
import { GlassFooter } from "@/components/ui/GlassFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <TopNav />
      <HeroSection />
      <DirectiveGrid />
      <KPIBar />
      <ThreeDGlobe />
      <OperationsBrief />
      <ServicesGrid />
      <ContactSection />
      <GlassFooter />
    </main>
  );
}
