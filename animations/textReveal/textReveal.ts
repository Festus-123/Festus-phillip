import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { textRevealVariant } from "./textRevealVariant";

gsap.registerPlugin(SplitText);

type TextRevealOptions = {
  variant?: keyof typeof textRevealVariant;
  delay?: number;
  ease?: string;
};

export function textReveal(
  target: HTMLElement,
  options: TextRevealOptions = {},
) {
  const { variant = "line", delay = 0, ease = "power3.out" } = options;

  const config = textRevealVariant[variant];

  const split = SplitText.create(target, {
    type: config.type,
    mask: config.mask,
    autoSplit: true,

    onSplit(self) {
      return gsap.from(
        self[
          variant === "line" ? "lines" : variant === "word" ? "words" : "chars"
        ],
        {
          yPercent: config.yPercent,
          duration: config.duration,
          stagger: config.stagger,
          delay,
          ease,
        },
      );
    },
  });

  return split;
}
