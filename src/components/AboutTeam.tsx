import Image from "next/image";
import { bio, team, teamQuote } from "@/lib/content";
import { liftLight } from "@/lib/motionClasses";
import { Sparkle } from "./Doodles";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

export function AboutTeam() {
  return (
    <section id="chi-siamo" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">
            Chi siamo
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl">
            Due persone, uno studio, un solo obiettivo.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/70">{bio}</p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2">
          {team.map((person) => (
            <RevealItem
              key={person.name}
              className={`rounded-3xl border border-navy/10 bg-white/50 p-6 ${liftLight}`}
            >
              <div className="flex h-[180px] items-center">
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={person.photoWidth}
                  height={person.photoHeight}
                  className="h-auto w-44"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-navy/55">
                Social media manager
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal
          delay={0.1}
          className="relative mt-8 rounded-3xl border border-rose/20 bg-rose-light/30 p-8 sm:p-10"
        >
          <Sparkle className="absolute -top-4 right-8 h-8 w-8 text-rose sm:h-10 sm:w-10" />
          <p className="font-script text-2xl font-bold leading-snug text-navy sm:text-3xl">
            &ldquo;{teamQuote}&rdquo;
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy/45">
            Come ci raccontiamo su Instagram
          </p>
        </Reveal>
      </div>
    </section>
  );
}
