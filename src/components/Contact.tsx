import { site, team } from "@/lib/content";
import { liftDark, tapHover } from "@/lib/motionClasses";
import { SwirlyArrow } from "./Doodles";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { InstagramIcon, MailIcon, PhoneIcon } from "./icons";

export function Contact() {
  return (
    <section id="contatti" className="bg-navy py-24 text-cream lg:py-28">
      <Reveal className="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-light">
          Contatti
        </p>
        <h2 className="relative mx-auto mt-4 max-w-2xl font-script text-5xl font-bold sm:text-6xl">
          Facciamo due chiacchiere?
          <SwirlyArrow className="pointer-events-none absolute -right-6 top-full h-14 w-14 -translate-y-2 text-rose-light sm:-right-14 sm:h-20 sm:w-20" />
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-cream/70">
          Raccontaci la tua attività: troviamo insieme il modo migliore per
          parlarne sui social.
        </p>

        <RevealGroup className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {team.map((person) => (
            <RevealItem
              key={person.name}
              as="a"
              href={person.phoneHref}
              className={`flex items-center gap-4 rounded-2xl border border-cream/15 bg-navy-2/50 p-5 text-left ${liftDark}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">
                  {person.name}
                </span>
                <span className="block text-sm text-cream/70">
                  {person.phone}
                </span>
              </span>
            </RevealItem>
          ))}

          <RevealItem
            as="a"
            href={`mailto:${site.email}`}
            className={`flex items-center gap-4 rounded-2xl border border-cream/15 bg-navy-2/50 p-5 text-left sm:col-span-2 ${liftDark}`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10">
              <MailIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold">Email</span>
              <span className="block text-sm text-cream/70">{site.email}</span>
            </span>
          </RevealItem>
        </RevealGroup>

        <a
          href={site.instagram.url}
          target="_blank"
          rel="noreferrer"
          className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold text-rose-light hover:text-cream ${tapHover}`}
        >
          <InstagramIcon className="h-5 w-5" />
          {site.instagram.handle}
        </a>
      </Reveal>
    </section>
  );
}
