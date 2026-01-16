interface Item {
  id: string;
  label: string;
}

const sections: Item[] = [
  { id: "overview", label: "Overview" },
  { id: "render", label: "Render" },
  { id: "specs", label: "Specifications" },
  { id: "certs", label: "Certifications" },
  { id: "install", label: "Installation" }
];

export default function ProductSidebar() {
  return (
    <nav className="space-y-4">

      <h3 className="text-lg font-semibold text-graphite mb-3">
        Product Index
      </h3>

      <ul className="space-y-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="
                block pl-2 border-l-2 border-steel text-steel 
                hover:text-graphite hover:border-brand-accent 
                transition
              "
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}
