export const pageTransitionVariant = {
  default: {
    duration: 0.8,
    stagger: 0.08,
    ease: "power3.inOut",
    enterDirection: 100,
    exitDirection: -100,
  },

  playful: {
    duration: 0.8,
    stagger: 0.1,
    ease: "back.inOut(1.1)",
    enterDirection: 100,
    exitDirection: -100,
  },

  fast: {
    duration: 0.55,
    stagger: 0.05,
    ease: "power2.inOut",
    enterDirection: 100,
    exitDirection: -100,
  },
} as const;
