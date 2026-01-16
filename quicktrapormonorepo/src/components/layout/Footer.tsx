import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-graphite text-white py-20 mt-section">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-16">

        <div>
          <img src="/images/logo_modern.png" className="h-12 mb-6 brightness-0 invert" alt="Quicktrap" />
          <p className="text-white/70 text-sm leading-relaxed">
            Engineered stormwater solutions for municipal and commercial infrastructure.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">info@quicktrap.ca</p>
          <p className="text-sm">555-555-5555</p>
          <p className="text-sm mt-2">Canada</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/product" className="hover:text-brand-accent">Product</a></li>
            <li><a href="/installation" className="hover:text-brand-accent">Installation</a></li>
            <li><a href="/casestudies" className="hover:text-brand-accent">Case Studies</a></li>
          </ul>
        </div>

      </Container>

      <Container className="mt-16 border-t border-steel pt-6 text-center text-xs text-steel">
        © {new Date().getFullYear()} Quicktrap. All Rights Reserved.
      </Container>
    </footer>
  );
}
