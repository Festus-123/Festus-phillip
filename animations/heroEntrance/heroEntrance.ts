import gsap from "gsap";
import { heroEntranceVariant } from "./heroEntranceVariant";

type HeroEntranceOptions = {
  variant?: keyof typeof heroEntranceVariant;
  onComplete?: () => void;
};

export function heroEntrance(
  container: HTMLElement,
  options: HeroEntranceOptions = {},
) {
  const { variant = "default", onComplete } = options;

  const config = heroEntranceVariant[variant];

  const tl = gsap.timeline({
    onComplete,
  });

  const intro = container.querySelector("[data-hero-intro]");
  const heading = container.querySelector("[data-hero-heading]");
  const description = container.querySelector("[data-hero-description]");
  const actions = container.querySelectorAll("[data-hero-action]");
  const socials = container.querySelectorAll("[data-hero-social]");
  const decorative = container.querySelectorAll("[data-hero-decor]");

  tl.from(intro, {
    opacity: 0,
    y: config.y,
    duration: config.duration,
    ease: config.ease,
  })

    .from(
      heading,
      {
        opacity: 0,
        y: config.y,
        duration: config.duration,
        ease: config.ease,
      },
      "-=0.45",
    )

    .from(
      description,
      {
        opacity: 0,
        y: config.y * 0.6,
        duration: config.duration,
        ease: config.ease,
      },
      "-=0.5",
    )

    .from(
      actions,
      {
        opacity: 0,
        y: config.y * 0.5,
        duration: config.duration * 0.75,
        stagger: config.stagger,
        ease: config.ease,
      },
      "-=0.4",
    )

    .from(
      socials,
      {
        opacity: 0,
        y: config.y * 0.4,
        duration: config.duration * 0.65,
        stagger: config.stagger,
        ease: config.ease,
      },
      "-=0.35",
    )

    .from(
      decorative,
      {
        opacity: 0,
        scale: 0.8,
        duration: config.duration,
        stagger: config.stagger,
        ease: "back.out(1.7)",
      },
      "-=0.6",
    );

  return tl;
}
