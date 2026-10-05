export const slideInVariant = {
  left: {
    x: -80,
    duration: 0.8,
    ease: "power3.out",
  },

  right: {
    x: 80,
    duration: 0.8,
    ease: "power3.out",
  },

  up: {
    y: 80,
    duration: 0.8,
    ease: "power3.out",
  },

  down: {
    y: -80,
    duration: 0.8,
    ease: "power3.out",
  },
} as const;