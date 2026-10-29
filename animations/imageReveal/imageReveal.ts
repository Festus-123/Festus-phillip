import gsap from "gsap";
import { imageRevealVariant } from "./imageRevealVariant";
import { createScrollTrigger, type ScrollOption } from "../scroll/scrollTrigger";

type ImageRevealOptions = {
  variant?: keyof typeof imageRevealVariant;
  maskColor?: string;
  scroll?: ScrollOption;
};

export function imageReveal(
  container: HTMLElement,
  options: ImageRevealOptions = {},
) {
  const {
    variant = "left",
    maskColor = "var(--color-blue)",
    scroll = true,
  } = options;

  const config = imageRevealVariant[variant];

  const image = container.querySelector<HTMLElement>("[data-image-reveal]");

  if (!image) return;

  let mask = container.querySelector<HTMLElement>("[data-image-reveal-mask]");

  if (!mask) {
    mask = document.createElement("div");

    mask.dataset.imageRevealMask = "";

    Object.assign(mask.style, {
      position: "absolute",
      inset: "0",
      zIndex: "2",
      background: maskColor,
      pointerEvents: "none",
    });

    container.appendChild(mask);
  }

  gsap.set(mask, {
    transformOrigin:
      config.origin === "right"
        ? "100% 50%"
        : config.origin === "center"
          ? "50% 50%"
          : "0% 50%",

    scaleX: 1,
  });

  gsap.set(image, {
    scale: 1.08,
  });

  const timeline = gsap.timeline({
    scrollTrigger: createScrollTrigger(container, scroll),
  });

  timeline
    .to(mask, {
      scaleX: 0,
      duration: config.duration,
      ease: config.ease,
    })
    .to(
      image,
      {
        scale: 1,
        duration: config.duration * 1.1,
        ease: "power3.out",
      },
      "<",
    );

  return timeline;
}
