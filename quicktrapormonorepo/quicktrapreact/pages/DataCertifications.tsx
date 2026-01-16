import Hero from '../components/Hero';
import CTASection from '../components/CTASection';

const DataCertifications = () => {
  const performanceClaims = [
    {
      category: 'Flow Performance',
      claims: [
        'Maintains 95%+ flow capacity under normal operating conditions',
        'Handles peak flow rates up to 500 GPM (model dependent)',
        'Minimal head loss across all flow ranges',
        'Self-cleaning design reduces maintenance frequency',
      ],
    },
    {
      category: 'Debris Capture',
      claims: [
        'Captures 90%+ of sediment particles larger than 250 microns',
        'Traps leaves, trash, and organic debris effectively',
        'Prevents downstream pipe blockages',
        'Reduces pollutant loading to waterways by up to 80%',
      ],
    },
    {
      category: 'Structural Integrity',
      claims: [
        'Load rated for H-20 traffic (16,000 lbs wheel load)',
        'Corrosion-resistant materials with 25+ year service life',
        'Withstands freeze-thaw cycles without degradation',
        'Seismic-resistant design for high-risk zones',
      ],
    },
    {
      category: 'Environmental Compliance',
      claims: [
        'Meets EPA stormwater management guidelines',
        'Complies with local MS4 permit requirements',
        'Supports LEED and green building certifications',
        'Reduces total suspended solids (TSS) by 75%+',
      ],
    },
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
    },
    {
      name: 'ASTM Standards',
      description: 'Compliant with ASTM D3034 and ASTM C478',
    },
    {
      name: 'EPA Verification',
      description: 'Environmental Technology Verification Program',
    },
    {
      name: 'AASHTO M306',
      description: 'Standard Specification for Drainage Pipe',
    },
    {
      name: 'NSF/ANSI 61',
      description: 'Drinking Water System Components',
    },
    {
      name: 'APWA Standards',
      description: 'American Public Works Association Compliance',
    },
  ];

  return (
    <div>
      <Hero
        title="Data & Certifications"
        subtitle="Proven performance backed by rigorous testing and industry certifications"
      />

      {/* Performance Data */}
      <section className="py-section lg:py-sectionLg bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-6">
              Performance Data
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Quicktrap units have been extensively tested in both laboratory and field conditions
              to verify performance claims. All data is available upon request for engineering review.
            </p>

            <div className="space-y-8">
              {performanceClaims.map((section, index) => (
                <div key={index} className="bg-concrete rounded-card p-inner shadow-card">
                  <h3 className="text-2xl font-bold text-brand mb-4">
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.claims.map((claim, claimIndex) => (
                      <li key={claimIndex} className="flex items-start text-gray-700">
                        <span className="text-brand-accent mr-3 text-xl flex-shrink-0">✓</span>
                        <span>{claim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-section lg:py-sectionLg bg-concrete">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-6 text-center">
              Industry Certifications
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Quicktrap products meet or exceed all relevant industry standards and certifications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-card shadow-card p-inner text-center hover:shadow-cardHover transition"
                >
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="text-lg font-bold text-brand mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Validation */}
      <section className="py-section lg:py-sectionLg bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-6">
              Testing & Validation
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              All Quicktrap products undergo rigorous testing protocols to ensure reliability and performance:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-concrete rounded-card p-inner shadow-card">
                <h3 className="text-xl font-semibold text-brand mb-3">
                  Laboratory Testing
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Hydraulic performance testing
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Structural load testing
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Material durability testing
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Sediment capture efficiency
                  </li>
                </ul>
              </div>

              <div className="bg-concrete rounded-card p-inner shadow-card">
                <h3 className="text-xl font-semibold text-brand mb-3">
                  Field Validation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Real-world installation monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Long-term performance tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Environmental impact assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Customer satisfaction surveys
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-section lg:py-sectionLg bg-concrete">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-6">
              Technical Documentation
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Comprehensive technical documentation is available for engineers and specifiers:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-card shadow-card p-4 flex items-center justify-between hover:shadow-cardHover transition">
                <div>
                  <h4 className="font-semibold text-brand">Performance Test Reports</h4>
                  <p className="text-sm text-gray-600">Detailed laboratory test results</p>
                </div>
                <button className="text-brand-accent hover:text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>

              <div className="bg-white rounded-card shadow-card p-4 flex items-center justify-between hover:shadow-cardHover transition">
                <div>
                  <h4 className="font-semibold text-brand">CAD Drawings</h4>
                  <p className="text-sm text-gray-600">AutoCAD and Revit files</p>
                </div>
                <button className="text-brand-accent hover:text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>

              <div className="bg-white rounded-card shadow-card p-4 flex items-center justify-between hover:shadow-cardHover transition">
                <div>
                  <h4 className="font-semibold text-brand">Installation Specifications</h4>
                  <p className="text-sm text-gray-600">Complete installation guide</p>
                </div>
                <button className="text-brand-accent hover:text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>

              <div className="bg-white rounded-card shadow-card p-4 flex items-center justify-between hover:shadow-cardHover transition">
                <div>
                  <h4 className="font-semibold text-brand">Certification Documents</h4>
                  <p className="text-sm text-gray-600">All compliance certificates</p>
                </div>
                <button className="text-brand-accent hover:text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Technical Documentation?"
        description="Contact us to receive detailed technical specifications and test reports for your project."
        primaryButtonText="Request Documentation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />
    </div>
  );
};

export default DataCertifications;
