import gsap from "gsap";
import { staggerVariant } from "./staggerVariant";

type StaggerOptions = {
  variant?: keyof typeof staggerVariant;
  opacity?: boolean;
};

export function stagger(
  targets: HTMLElement[] | NodeListOf<HTMLElement>,
  options: StaggerOptions = {},
) {
  const {
    variant = "default",
    opacity = true,
  } = options;

  const config = staggerVariant[variant];

  return gsap.from(targets, {
    y: config.y,
    opacity: opacity ? 0 : 1,
    duration: config.duration,
    stagger: config.stagger,
    ease: config.ease,
  });
}