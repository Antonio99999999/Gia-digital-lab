/** Shared micro-interaction classes for clickable elements: a slight lift on
 * hover, a slight press on click, both driven by plain CSS transitions. */
export const tapHover =
  "transition-all duration-200 ease-out hover:scale-[1.02] active:scale-95";

/** Soft-elevation hover for cards on a light background. */
export const liftLight =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(18,25,53,0.35)]";

/** Soft-elevation hover for cards on the dark navy sections. */
export const liftDark =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cream/30 hover:bg-navy-2/80";
