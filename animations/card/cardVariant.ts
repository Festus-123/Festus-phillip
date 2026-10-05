export const cardVariant = {
  default: {
    y: -8,
    rotation: 1,
    scale: 1.02,
    duration: 0.35,
    ease: "power2.out",
  },

  playful: {
    y: -12,
    rotation: 1.5,
    scale: 1.025,
    duration: 0.4,
    ease: "back.out(1.4)",
  },

  subtle: {
    y: -5,
    rotation: 0.5,
    scale: 1.01,
    duration: 0.3,
    ease: "power2.out",
  },
} as const;