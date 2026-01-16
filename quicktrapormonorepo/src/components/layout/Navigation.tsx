import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/installation", label: "Installation" },
    { path: "/casestudies", label: "Case Studies" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full border-b border-concrete bg-white/95 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-md">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/images/logo_modern.png" alt="Quicktrap" className="h-14 w-auto" />
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-graphite font-medium">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative pb-1 transition-colors duration-200 text-[15px] hover:text-graphite
                  ${active ? "text-graphite" : "text-steel"}
                `}
              >
                {item.label}
                {active && (
                  <span className="absolute left-0 -bottom-[2px] h-[3px] w-full bg-brand-accent rounded-sm"></span>
                )}
              </Link>
            );
          })}
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-graphite">☰</button>
      </Container>

      {open && (
        <div className="lg:hidden bg-white border-b border-concrete px-6 py-4 space-y-4">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`
                  block pb-1 text-lg 
                  ${active ? "text-brand-accent font-semibold" : "text-graphite"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
