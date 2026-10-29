"use client";

import { assets } from "@/public/assets/asset";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { imageReveal, textReveal } from "@/animations";
import Panel from "@/components/panel/Panel";

const Introduction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const panelContainerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const heading = sectionRef.current.querySelector<HTMLElement>(
        "[data-intro-heading]",
      );

      const copy =
        sectionRef.current.querySelector<HTMLElement>("[data-intro-copy]");

      const label =
        sectionRef.current.querySelector<HTMLElement>("[data-intro-label]");

      const codeImage =
        sectionRef.current.querySelector<HTMLElement>("[data-code-image]");

      const runButton =
        sectionRef.current.querySelector<HTMLElement>("[data-run-button]");

      if (label) {
        gsap.from(label, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });
      }

      if (heading) {
        textReveal(heading, {
          variant: "line",
        });
      }

      if (copy) {
        gsap.from(copy, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        });
      }

      if (codeImage) {
        gsap.from(codeImage, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: codeImage,
            start: "top 80%",
            once: true,
          },
        });
      }

      if (runButton) {
        gsap.from(runButton, {
          opacity: 0,
          scale: 0.7,
          duration: 0.7,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: codeImage,
            start: "top 75%",
            once: true,
          },
        });
      }
    },
    {
      scope: sectionRef,
    },
  );

  const handleRun = () => {
    if (isRunning) return;

    setIsRunning(true);
    setIsPanelOpen(true);

    requestAnimationFrame(() => {
      if (!panelContainerRef.current) return;

      imageReveal(panelContainerRef.current, {
        variant: "left",
        maskColor: "var(--color-blue)",
        scroll: false,
      });
    });
  };

  const handleSimulationComplete = () => {
    window.setTimeout(() => {
      router.push("/about");
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20"
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
          <span className="text-brand-gradient">look good, feel good,</span> and
          actually work.
        </h2>

        {/* Supporting text */}
        <div className="mt-10 max-w-3xl">
          <p
            data-intro-copy
            className="font-general text-lg leading-8 text-secondary md:text-xl"
          >
            I&apos;m Festus, a software developer focused on building modern web
            and mobile applications. I enjoy turning ideas into responsive,
            purposeful interfaces and working through the logic behind the
            experience, not just how it looks.
          </p>
        </div>

        {/* Code / Simulation */}
        <div
          data-code-image
          className="relative mt-16 overflow-hidden border-2 border-ink bg-cream-dark card-offset md:mt-20"
        >
          <Image
            src={assets.code_2}
            alt="Source code"
            loading="lazy"
            width={1200}
            height={700}
            className="h-auto aspect-square sm:aspect-video md:w-full grayscale transition-all duration-500 hover:grayscale-0"
          />

          {/* Simulation panel */}
          {isPanelOpen && (
            <div
              ref={panelContainerRef}
              className="absolute left-1/2 top-1/2 z-20 w-[90%] -translate-x-1/2 -translate-y-1/2 md:w-auto"
            >
              <div
                data-image-reveal-mask
                className="absolute inset-0 z-10 bg-blue"
              />

              <Panel
                title="navigation"
                command="npm run dev"
                output={[
                  "C://festusphillip/introduction> npm run dev",
                  "Starting the development server...",
                  "dev server: https://festusphillip.dev",
                  ".",
                  ".",
                  "compilation completed in 650ms",
                  "opening path: https://festusphillip.dev/about",
                ]}
                onComplete={handleSimulationComplete}
              />
            </div>
          )}

          {/* Run button */}
          {!isPanelOpen && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-blue  font-satoshi text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-x-2 hover:bg-blue-dark ">
              <button
                data-run-button
                type="button"
                aria-label="go to /about"
                onClick={handleRun}
                disabled={isRunning}
                className="px-5 py-4 md:px-8 md:py-8"
              >
                Run
              </button>
            </div>
          )}
        </div>

        {/* Small hint */}
        <div className="mt-6 flex items-center justify-between">
          <span className="font-mono text-xs text-muted">
            $ npm run introduction
          </span>

          <span className="font-satoshi text-xs font-bold uppercase tracking-wider text-muted">
            interactive
          </span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
