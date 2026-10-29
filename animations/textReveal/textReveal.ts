import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { textRevealVariant } from "./textRevealVariant";
import { createScrollTrigger, type ScrollOption } from "../scroll/scrollTrigger";

gsap.registerPlugin(SplitText);

type TextRevealOptions = {
  variant?: keyof typeof textRevealVariant;
  delay?: number;
  ease?: string;
  scroll?: ScrollOption;
};

export function textReveal(
  target: HTMLElement,
  options: TextRevealOptions = {},
) {
  const {
    variant = "line",
    delay = 0,
    ease = "power3.out",
    scroll = true,
  } = options;

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
          scrollTrigger: createScrollTrigger(target, scroll),
        },
      );
    },
  });

  return split;
}
