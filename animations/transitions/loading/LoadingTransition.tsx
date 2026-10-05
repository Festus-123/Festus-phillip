"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Loading = () => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!loaderRef.current) return;

      const dots = gsap.utils.toArray<HTMLElement>("[data-loader-dot]");

      const tl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "power2.inOut",
        },
      });

      dots.forEach((dot, index) => {
        const distance = 110 + index * 35;

        tl.to(
          dot,
          {
            x: distance,
            duration: 0.9 + index * 0.05,
          },
          0,
        )
          .to(
            dot,
            {
              y: -18,
              scale: 1.15,
              duration: 0.25,
              ease: "power2.out",
            },
            `-=${0.65 - index * 0.04}`,
          )
          .to(dot, {
            y: 0,
            scale: 1,
            duration: 0.25,
            ease: "bounce.out",
          })
          .to(dot, {
            x: -distance,
            duration: 0.9 + index * 0.05,
          })
          .to(
            dot,
            {
              y: -18,
              scale: 1.15,
              duration: 0.25,
              ease: "power2.out",
            },
            `-=${0.65 - index * 0.04}`,
          )
          .to(dot, {
            y: 0,
            scale: 1,
            duration: 0.25,
            ease: "bounce.out",
          })
          .to(dot, {
            x: 0,
            duration: 0.9 + index * 0.05,
          });
      });
    },
    {
      scope: loaderRef,
    },
  );

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-cream"
    >
      <div className="flex flex-col items-center">
        {/* Brand */}
        <div className="mb-10 font-satoshi text-sm font-bold uppercase tracking-[0.3em] text-ink">
          Fescude
        </div>

        {/* Dots */}
        <div className="flex items-center gap-3">
          <span data-loader-dot className="h-4 w-4 rounded-full bg-blue" />

          <span data-loader-dot className="h-5 w-5 rounded-full bg-gold" />

          <span data-loader-dot className="h-4 w-4 rounded-full bg-blue" />
        </div>

        {/* Loading line */}
        <div className="mt-10 h-[2px] w-32 overflow-hidden bg-ink/10">
          <div
            className="h-full w-full origin-left bg-blue"
            ref={(element) => {
              if (!element) return;

              gsap.fromTo(
                element,
                {
                  scaleX: 0,
                },
                {
                  scaleX: 1,
                  duration: 2.5,
                  ease: "power2.inOut",
                  repeat: -1,
                  yoyo: true,
                },
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
