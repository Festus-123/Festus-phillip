export const imageRevealVariant = {
  left: {
    duration: 0.9,
    ease: "power3.inOut",
    origin: "left",
  },

  right: {
    duration: 0.9,
    ease: "power3.inOut",
    origin: "right",
  },

  center: {
    duration: 1,
    ease: "power3.inOut",
    origin: "center",
  },

  fast: {
    duration: 0.65,
    ease: "power2.inOut",
    origin: "left",
  },
} as const;
