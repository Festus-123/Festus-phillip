import gsap from "gsap";
import { staggerVariant } from "./staggerVariant";
import { createScrollTrigger, type ScrollOption } from "../scroll/scrollTrigger";

type StaggerOptions = {
  variant?: keyof typeof staggerVariant;
  opacity?: boolean;
  scroll?: ScrollOption;
};

export function stagger(
  targets: HTMLElement[] | NodeListOf<HTMLElement>,
  options: StaggerOptions = {},
) {
  const {
    variant = "default",
    opacity = true,
    scroll = true,
  } = options;

  const config = staggerVariant[variant];

  return gsap.from(targets, {
    y: config.y,
    opacity: opacity ? 0 : 1,
    duration: config.duration,
    stagger: config.stagger,
    ease: config.ease,
    scrollTrigger: createScrollTrigger(
      (targets as ArrayLike<HTMLElement>)[0],
      scroll,
    ),
  });
}