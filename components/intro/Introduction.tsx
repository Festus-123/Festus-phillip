"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Introduction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from("[data-intro-label]", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          "[data-intro-heading]",
          {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          "[data-intro-copy]",
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20 border-t"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <p
          data-intro-label
          className="mb-8 font-satoshi text-sm font-bold uppercase tracking-[0.25em] text-blue"
        >
          A Little &apos;Introduction&apos;
        </p>

        {/* Main statement */}
        <h2
          data-intro-heading
          className="max-w-6xl font-satoshi text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl"
        >
          I build digital experiences that{" "}
          <span className="text-brand-gradient">
            look good, feel good,
          </span>{" "}
          and actually work.
        </h2>

        {/* Supporting text */}
        <div className="mt-12 md:mt-24 grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <span className="font-satoshi text-[clamp(1.25rem,4vw,2rem)] font-bold uppercase tracking-widest text-muted">
              A little about me
            </span>
          </div>

          <p
            data-intro-copy
            className="max-w-3xl font-general text-lg leading-8 text-secondary md:text-2xl text-justify"
          >
            I&apos;m Festus, a software developer focused on building modern
            web and mobile applications. I enjoy turning ideas into
            responsive, purposeful interfaces and working through the logic
            behind the experience, not just how it looks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;