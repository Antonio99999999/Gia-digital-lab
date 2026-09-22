import { services } from "@/lib/content";
import { liftDark } from "@/lib/motionClasses";
import { Sparkle } from "./Doodles";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

export function Method() {
  return (
    <section id="metodo" className="bg-navy py-24 text-cream lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="relative max-w-2xl">
          <Sparkle className="absolute -top-2 left-40 h-7 w-7 text-rose-light sm:left-56" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-light">
            Come lavoriamo
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Dal brief al post pubblicato.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <RevealItem
              key={service.step}
              className={`rounded-3xl border border-cream/15 bg-navy-2/50 p-8 ${liftDark}`}
            >
              <span className="font-display text-4xl font-bold text-rose-light">
                {service.step}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-cream/70">
                {service.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
