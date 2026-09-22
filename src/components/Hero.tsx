"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { site } from "@/lib/content";
import { tapHover } from "@/lib/motionClasses";
import { ScribbleUnderline, Sparkle } from "./Doodles";
import { ArrowRightIcon } from "./icons";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora-a absolute -top-24 -left-16 h-[420px] w-[420px] rounded-full bg-rose-light/40 blur-3xl" />
        <div className="aurora-b absolute top-0 right-[-8%] h-[380px] w-[380px] rounded-full bg-cream-2/80 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10"
      >
        <div>
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep"
          >
            Social media management · {site.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-[2.6rem] font-bold leading-[1.08] text-navy sm:text-[3.4rem] lg:text-[3.75rem]"
          >
            Dalla strategia ai contenuti:
            <br />
            raccontiamo{" "}
            <span className="relative inline-block">
              <span className="font-script font-bold text-rose">chi sei</span>
              <ScribbleUnderline
                delay={0.9}
                className="absolute -bottom-2 left-0 h-3 w-full text-rose"
              />
            </span>
            ,
            <br />
            sui social.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-navy/70"
          >
            Siamo Gabi e Giulia: social media manager freelance a Torino.
            Studiamo brand, pubblico e obiettivi per costruire una
            comunicazione chiara, coerente e su misura per la tua attività.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contatti"
              className={`inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream hover:bg-navy-2 ${tapHover}`}
            >
              Facciamo due chiacchiere
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#risultati"
              className={`inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 text-sm font-semibold text-navy hover:border-navy/40 ${tapHover}`}
            >
              Guarda i risultati
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-rose-light/50 lg:-inset-6" />
          <Sparkle
            delay={1.1}
            className="absolute -top-6 -right-3 z-10 h-9 w-9 text-rose lg:-top-8 lg:-right-6 lg:h-12 lg:w-12"
          />
          <div className="relative aspect-[528/666] w-full overflow-hidden rounded-3xl border border-navy/10">
            <Image
              src="/images/team-hero.png"
              alt="Gabi e Giulia, il team di Gia Digital Lab"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 384px, 90vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
