import Hero from '../components/sections/Hero/Hero';
import PerformanceData from '../components/sections/DataCertifications/PerformanceData';
import CertificationsGrid from '../components/sections/DataCertifications/CertificationsGrid';
import TestingValidation from '../components/sections/DataCertifications/TestingValidation';
import TechnicalDocs from '../components/sections/DataCertifications/TechnicalDocs';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const DataCertifications = () => {
  return (
    <div>
      <SEO
        title="Data & Certifications"
        description="Review our performance data, third-party testing results, and industry certifications."
        canonical="https://quicktrap.ca/data-certifications"
      />

      <Hero
        title="Data & Certifications"
        subtitle="Verified performance data and industry certifications you can trust"
        image="/images/hero_aerial.png"
      />

      <PerformanceData />
      <CertificationsGrid />
      <TestingValidation />
      <TechnicalDocs />

      <CTASection
        title="Need Specific Documentation?"
        description="Contact our engineering team for detailed reports and specifications."
        primaryButtonText="Contact Engineering"
        primaryButtonLink="/contact"
      />
    </div>
  );
};

export default DataCertifications;

