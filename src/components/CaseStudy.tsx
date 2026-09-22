import Image from "next/image";
import { caseStudy, site } from "@/lib/content";
import { CircleScribble } from "./Doodles";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { ArrowRightIcon } from "./icons";

export function CaseStudy() {
  return (
    <section id="risultati" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">
            Risultati
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-bold text-navy sm:text-5xl">
            Non solo contenuti belli: contenuti che funzionano.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid items-center gap-10 rounded-[2.5rem] border border-navy/10 bg-cream-2/60 p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
          <RevealItem className="relative aspect-[610/688] w-full overflow-hidden rounded-3xl border border-navy/10">
            <Image
              src="/images/cabaret-pasticceria.png"
              alt={`Il laboratorio di ${caseStudy.client}`}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </RevealItem>

          <RevealItem>
            <p className="text-sm font-semibold text-navy/50">
              Caso studio · {caseStudy.handle}
            </p>
            <p className="relative inline-block mt-3 font-display text-5xl font-bold text-rose sm:text-6xl">
              {caseStudy.stat}
              <CircleScribble className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 h-[calc(100%+1.5rem)] w-[calc(100%+2rem)] text-rose/70" />
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy/60">
              {caseStudy.statLabel}
            </p>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-navy/70">
              {caseStudy.description}
            </p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-deep transition-colors hover:text-navy"
            >
              Guarda il caso studio su Instagram
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
