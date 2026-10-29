import gsap from "gsap";
import { fadeInVariant } from "./fadeInVariant";
import { createScrollTrigger, type ScrollOption } from "../scroll/scrollTrigger";

type FadeInOptions = {
  variant?: keyof typeof fadeInVariant;
  delay?: number;
  scroll?: ScrollOption;
};

export function fadeIn(
  target: HTMLElement | HTMLElement[],
  options: FadeInOptions = {},
) {
  const {
    variant = "default",
    delay = 0,
    scroll = true,
  } = options;

  const config = fadeInVariant[variant];

  return gsap.from(target, {
    opacity: config.opacity,
    duration: config.duration,
    ease: config.ease,
    delay,
    scrollTrigger: createScrollTrigger(
      Array.isArray(target) ? target[0] : target,
      scroll,
    ),
  });
}