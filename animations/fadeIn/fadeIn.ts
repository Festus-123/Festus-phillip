import gsap from "gsap";
import { fadeInVariant } from "./fadeInVariant";

type FadeInOptions = {
  variant?: keyof typeof fadeInVariant;
  delay?: number;
};

export function fadeIn(
  target: HTMLElement | HTMLElement[],
  options: FadeInOptions = {},
) {
  const {
    variant = "default",
    delay = 0,
  } = options;

  const config = fadeInVariant[variant];

  return gsap.from(target, {
    opacity: config.opacity,
    duration: config.duration,
    ease: config.ease,
    delay,
  });
}