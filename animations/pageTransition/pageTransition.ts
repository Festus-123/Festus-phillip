import gsap from "gsap";
import { pageTransitionVariant } from "./pageTransitionVariant";

type PageTransitionOptions = {
  variant?: keyof typeof pageTransitionVariant;
  onComplete?: () => void;
};

export function pageTransition(
  container: HTMLElement,
  options: PageTransitionOptions = {},
) {
  const { variant = "playful", onComplete } = options;

  const config = pageTransitionVariant[variant];

  const curtains = container.querySelectorAll<HTMLElement>(
    "[data-transition-curtain]",
  );

  if (!curtains.length) return;

  const tl = gsap.timeline({
    onComplete,
  });

  // Start outside the viewport
  gsap.set(curtains, {
    xPercent: config.enterDirection,
  });

  // Bring the curtains into view
  tl.to(curtains, {
    xPercent: 0,
    duration: config.duration,
    stagger: config.stagger,
    ease: config.ease,
  });

  // Small pause while the screen is covered
  tl.to(
    {},
    {
      duration: 0.02,
    },
  );

  // Push the curtains out to the left
  tl.to(curtains, {
    xPercent: config.exitDirection,
    duration: config.duration,
    stagger: config.stagger,
    ease: config.ease,
  });

  return tl;
}
