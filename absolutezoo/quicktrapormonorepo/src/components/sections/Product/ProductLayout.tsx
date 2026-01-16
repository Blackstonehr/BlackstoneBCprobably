import Container from "../../layout/Container";
import type { ReactNode } from "react";

interface ProductLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export default function ProductLayout({ sidebar, children }: ProductLayoutProps) {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

          {/* Sidebar */}
          <aside className="hidden lg:block sticky top-28 h-fit">
            {sidebar}
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            {children}
          </main>

        </div>
      </Container>
    </div>
  );
}
