import Container from "../../layout/Container";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Superior Flow Management",
    desc: "Engineered flow-path design prevents blockages while maximizing throughput.",
    icon: "/images/icons/icon_flow.png",
  },
  {
    title: "Easy Installation",
    desc: "Simple installation process that integrates seamlessly with existing infrastructure.",
    icon: "/images/icons/icon_installation.png",
  },
  {
    title: "Durable Construction",
    desc: "Industrial-grade materials withstand harsh weather and demanding loads.",
    icon: "/images/icons/icon_structural.png",
  },
  {
    title: "Environmentally Friendly",
    desc: "Designed to protect waterways by preventing pollutants from entering storm systems.",
    icon: "/images/icons/icon_environment.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-title font-bold text-graphite">
            Why Choose Quicktrap?
          </h2>
          <p className="text-steel mt-2">
            Engineered for performance, designed for reliability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}
