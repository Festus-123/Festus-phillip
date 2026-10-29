import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ScrollOption = boolean | { start?: string };

/**
 * Builds a ScrollTrigger config so an animation plays when `trigger`
 * scrolls into view. Returns undefined when scroll triggering is disabled.
 */
export function createScrollTrigger(
  trigger: Element | undefined,
  scroll: ScrollOption = true,
) {
  if (!scroll || !trigger) return undefined;

  const start = typeof scroll === "object" && scroll.start ? scroll.start : "top 85%";

  return {
    trigger,
    start,
    once: true,
  };
}
