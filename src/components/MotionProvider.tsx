"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global motion defaults. `reducedMotion="user"` makes framer-motion honour
 * prefers-reduced-motion automatically: transforms are skipped, opacity
 * fades still play.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
