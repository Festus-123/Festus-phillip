import gsap from "gsap";
import { slideInVariant } from "./slideInVariant";
import { createScrollTrigger, type ScrollOption } from "../scroll/scrollTrigger";

type SlideInOptions = {
  variant?: keyof typeof slideInVariant;
  delay?: number;
  scroll?: ScrollOption;
};

export function slideIn(
  target: HTMLElement | HTMLElement[],
  options: SlideInOptions = {},
) {
  const {
    variant = "up",
    delay = 0,
    scroll = true,
  } = options;

  const config = slideInVariant[variant];
  const { x, y } = config as { x?: number; y?: number };

  return gsap.from(target, {
    x,
    y,
    duration: config.duration,
    ease: config.ease,
    delay,
    scrollTrigger: createScrollTrigger(
      Array.isArray(target) ? target[0] : target,
      scroll,
    ),
  });
}