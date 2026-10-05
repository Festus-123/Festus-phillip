export const fadeInVariant = {
  default: {
    duration: 0.7,
    ease: "power3.out",
    opacity: 0,
  },

  fast: {
    duration: 0.45,
    ease: "power2.out",
    opacity: 0,
  },

  slow: {
    duration: 1,
    ease: "power3.out",
    opacity: 0,
  },
} as const;