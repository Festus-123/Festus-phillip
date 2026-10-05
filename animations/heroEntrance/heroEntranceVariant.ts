export const heroEntranceVariant = {
  default: {
    duration: 0.8,
    stagger: 0.08,
    ease: "power3.out",
    y: 40,
  },

  fast: {
    duration: 0.55,
    stagger: 0.05,
    ease: "power2.out",
    y: 24,
  },

  cinematic: {
    duration: 1.1,
    stagger: 0.12,
    ease: "power4.out",
    y: 60,
  },
} as const;
