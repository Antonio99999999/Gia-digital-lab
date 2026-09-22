import { clients } from "@/lib/content";
import { Reveal } from "./motion/Reveal";

export function ClientStrip() {
  return (
    <section className="border-y border-navy/10 bg-cream-2/60 py-8">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/45">
          Chi si è raccontato con noi
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {clients.map((client) => (
            <span
              key={client}
              className="font-display text-lg text-navy/55 sm:text-xl"
            >
              {client}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
