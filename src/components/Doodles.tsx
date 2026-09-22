"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.65, 0, 0.35, 1] as const;

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1 },
};

type DoodleProps = {
  className?: string;
  delay?: number;
};

/** A loose, hand-drawn wavy underline. Draws itself on scroll into view. */
export function ScribbleUnderline({ className, delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      viewBox="0 0 160 20"
      className={className}
      fill="none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.path
        d="M4 14C24 4 40 18 60 8C80 -2 96 16 116 6C130 -1 142 10 156 8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        variants={draw}
        transition={{ duration: 0.9, ease: EASE, delay }}
      />
    </motion.svg>
  );
}

/** A rough, hand-circled ellipse that overshoots slightly, like a real pen stroke. */
export function CircleScribble({ className, delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      viewBox="0 0 200 90"
      className={className}
      fill="none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.path
        d="M100 6C50 2 12 22 10 46C8 70 46 86 100 84C154 82 190 68 188 44C186 20 150 8 100 10C70 12 40 20 30 34"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        variants={draw}
        transition={{ duration: 1.1, ease: EASE, delay }}
      />
    </motion.svg>
  );
}

/** A small four-point sparkle. Pops in rather than drawing. */
export function Sparkle({ className, delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={pop}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      <path d="M20 2C20 12 12 20 2 20C12 20 20 28 20 38C20 28 28 20 38 20C28 20 20 12 20 2Z" />
    </motion.svg>
  );
}

/** A curved, hand-drawn arrow that draws in and then pops its arrowhead,
 * pointing straight down at whatever sits below it. */
export function SwirlyArrow({ className, delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      viewBox="0 0 80 90"
      className={className}
      fill="none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.path
        d="M14 6C48 10 56 32 40 54"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        variants={draw}
        transition={{ duration: 0.8, ease: EASE, delay }}
      />
      <motion.path
        d="M28 45L40 58L52 45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        transition={{ duration: 0.35, ease: EASE, delay: delay + 0.75 }}
      />
    </motion.svg>
  );
}
