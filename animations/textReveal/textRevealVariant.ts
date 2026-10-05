export const textRevealVariant = {
  line: {
    type: "lines",
    mask: "lines",
    target: "lines",
    yPercent: 100,
    duration: 0.9,
    stagger: 0.08,
  },

  word: {
    type: "words",
    mask: "words",
    target: "words",
    yPercent: 100,
    duration: 0.7,
    stagger: 0.05,
  },

  char: {
    type: "chars",
    mask: "chars",
    target: "chars",
    yPercent: 100,
    duration: 0.5,
    stagger: 0.02,
  },
} as const;
