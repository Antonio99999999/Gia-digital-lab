import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Reveal } from "./motion/Reveal";

type LegalLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <h1 className="font-display text-4xl font-bold text-navy sm:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-navy/50">
              Ultimo aggiornamento: {updated}
            </p>

            <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-navy/75 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
              {children}
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
