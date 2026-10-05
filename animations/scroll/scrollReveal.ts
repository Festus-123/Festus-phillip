import type { Variants } from "framer-motion";

export const createScrollRevealVariants = (
  distance = 24,
  duration = 0.65,
): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: "easeOut" },
  },
});
