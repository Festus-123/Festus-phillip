import { createScrollRevealVariants } from "./scrollReveal";

export const scrollVariant = createScrollRevealVariants();
export const scrollViewport = { once: true, amount: 0.2 } as const;
