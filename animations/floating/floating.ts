import gsap from "gsap";
import { floatingVariant } from "./floatingVariant";

type FloatingOptions = {
  variant?: keyof typeof floatingVariant;
};

export function floating(
  target: HTMLElement,
  options: FloatingOptions = {},
) {
  const {
    variant = "default",
  } = options;

  const config = floatingVariant[variant];

  return gsap.to(target, {
    y: config.y,
    duration: config.duration,
    ease: config.ease,
    repeat: -1,
    yoyo: true,
  });
}