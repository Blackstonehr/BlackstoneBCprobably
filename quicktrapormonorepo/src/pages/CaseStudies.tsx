import Hero from '../components/sections/Hero/Hero';
import CaseStudiesSection from '../components/sections/CaseStudies/CaseStudiesSection';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const CaseStudies = () => {
  return (
    <div>
      <SEO
        title="Case Studies & Success Stories"
        description="See how Quicktrap has helped municipalities and businesses improve stormwater management and reduce maintenance costs."
        canonical="https://quicktrap.ca/case-studies"
      />

      <Hero
        title="Case Studies"
        subtitle="Real-world results from municipalities and businesses across North America"
        image="/images/hero_pipe.png"
      />

      <CaseStudiesSection />

      <CTASection
        title="Ready to Achieve Similar Results?"
        description="Contact our engineering team to discuss your specific requirements."
        primaryButtonText="Request a Consultation"
        primaryButtonLink="/contact"
      />
    </div>
  );
};

export default CaseStudies;
