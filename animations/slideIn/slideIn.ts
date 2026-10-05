import gsap from "gsap";
import { slideInVariant } from "./slideInVariant";

type SlideInOptions = {
  variant?: keyof typeof slideInVariant;
  delay?: number;
};

export function slideIn(
  target: HTMLElement | HTMLElement[],
  options: SlideInOptions = {},
) {
  const {
    variant = "up",
    delay = 0,
  } = options;

  const config = slideInVariant[variant];

  return gsap.from(target, {
    x: config.x,
    y: config.y,
    duration: config.duration,
    ease: config.ease,
    delay,
  });
}