import gsap from "gsap";
import { cardVariant } from "./cardVariant";

type CardHoverOptions = {
  variant?: keyof typeof cardVariant;
};

export function cardHover(
  card: HTMLElement,
  options: CardHoverOptions = {},
) {
  const {
    variant = "default",
  } = options;

  const config = cardVariant[variant];

  const enter = () => {
    gsap.to(card, {
      y: config.y,
      rotation: config.rotation,
      scale: config.scale,
      duration: config.duration,
      ease: config.ease,
    });
  };

  const leave = () => {
    gsap.to(card, {
      y: 0,
      rotation: 0,
      scale: 1,
      duration: config.duration,
      ease: config.ease,
    });
  };

  card.addEventListener("mouseenter", enter);
  card.addEventListener("mouseleave", leave);

  return () => {
    card.removeEventListener("mouseenter", enter);
    card.removeEventListener("mouseleave", leave);
  };
}