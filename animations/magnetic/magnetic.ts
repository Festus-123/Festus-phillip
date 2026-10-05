import gsap from "gsap";
import { magneticVariant } from "./magneticVariant";

type MagneticOptions = {
  variant?: keyof typeof magneticVariant;
};

export function magnetic(
  target: HTMLElement,
  options: MagneticOptions = {},
) {
  const {
    variant = "default",
  } = options;

  const config = magneticVariant[variant];

  const xTo = gsap.quickTo(target, "x", {
    duration: config.duration,
    ease: config.ease,
  });

  const yTo = gsap.quickTo(target, "y", {
    duration: config.duration,
    ease: config.ease,
  });

  const handleMove = (event: MouseEvent) => {
    const bounds = target.getBoundingClientRect();

    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;

    const x = (event.clientX - centerX) * config.strength;
    const y = (event.clientY - centerY) * config.strength;

    xTo(x);
    yTo(y);
  };

  const handleEnter = () => {
    gsap.to(target, {
      scale: 1.03,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    xTo(0);
    yTo(0);

    gsap.to(target, {
      scale: 1,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });
  };

  target.addEventListener("mousemove", handleMove);
  target.addEventListener("mouseenter", handleEnter);
  target.addEventListener("mouseleave", handleLeave);

  return () => {
    target.removeEventListener("mousemove", handleMove);
    target.removeEventListener("mouseenter", handleEnter);
    target.removeEventListener("mouseleave", handleLeave);

    xTo(0);
    yTo(0);
  };
}