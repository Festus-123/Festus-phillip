export const magneticVariant = {
  default: {
    strength: 0.25,
    duration: 0.35,
    ease: "power3.out",
  },

  strong: {
    strength: 0.4,
    duration: 0.3,
    ease: "power3.out",
  },

  subtle: {
    strength: 0.15,
    duration: 0.4,
    ease: "power2.out",
  },
} as const;