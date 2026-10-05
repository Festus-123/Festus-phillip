export const staggerVariant = {
  default: {
    duration: 0.7,
    stagger: 0.12,
    y: 40,
    ease: "power3.out",
  },

  fast: {
    duration: 0.5,
    stagger: 0.08,
    y: 25,
    ease: "power2.out",
  },

  slow: {
    duration: 0.9,
    stagger: 0.18,
    y: 60,
    ease: "power3.out",
  },
} as const;