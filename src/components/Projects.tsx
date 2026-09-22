import Image from "next/image";
import { clients, events, gallery } from "@/lib/content";
import { liftLight } from "@/lib/motionClasses";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

export function Projects() {
  return (
    <section id="progetti" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">
            Content creator per eventi
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-bold text-navy sm:text-5xl">
            Presenti sul posto, per raccontarlo mentre succede.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-navy/70">
            Foto, video, stories e post per la comunicazione post-evento e in
            tempo reale. Tra i progetti seguiti:
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <RevealItem
              key={event.name}
              className={`rounded-3xl border border-navy/10 bg-white/50 p-7 ${liftLight}`}
            >
              <h3 className="font-display text-xl font-semibold text-navy">{event.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/65">
                {event.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {gallery.map((item) => (
            <RevealItem
              key={item.src}
              as="figure"
              className={`group overflow-hidden rounded-3xl border border-navy/10 ${liftLight}`}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: `${item.width}/${item.height}` }}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="bg-white/60 px-5 py-3 text-sm font-medium text-navy/70">
                {item.caption}
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 rounded-3xl border border-navy/10 bg-cream-2/60 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/45">
            E anche con
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="rounded-full border border-navy/15 bg-cream px-4 py-2 text-sm font-medium text-navy/75 transition-colors duration-200 hover:border-rose-deep/40"
              >
                {client}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
