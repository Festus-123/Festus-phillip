"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

import { skillCategories, tools } from "@/data/skills";
import { cardHover, floating, stagger, textReveal } from "@/animations";
import Image from "next/image";

const SkillsIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedTool, setSelectedTool] = useState<number | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const heading = sectionRef.current.querySelector<HTMLElement>(
        "[data-skills-heading]",
      );

      const cards =
        sectionRef.current.querySelectorAll<HTMLElement>("[data-skill-card]");

      const decorative =
        sectionRef.current.querySelectorAll<HTMLElement>("[data-skill-decor]");

      if (heading) {
        textReveal(heading, {
          variant: "line",
        });
      }

      if (cards.length) {
        stagger(cards, {
          variant: "default",
          opacity: true,
        });

        cards.forEach((card) => {
          cardHover(card, {
            variant: "subtle",
          });
        });
      }

      decorative.forEach((item) => {
        floating(item, {
          variant: "gentle",
        });
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20 "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-4xl md:mb-24">
          <p className="mb-6 font-satoshi text-sm font-bold uppercase tracking-[0.25em] text-blue">
            my stacks & Capabilities
          </p>

          <h2
            data-skills-heading
            className="font-satoshi text-5xl font-bold leading-[1.1] tracking-tight text-ink md:text-7xl lg:text-8xl"
          >
            More than a stack.
            <br />
            <span className="text-brand-gradient">A way of building.</span>
          </h2>
        </div>

        {/* Skills */}
        <div className="relative mx-auto flex items-center justify-center bg-blue/[0.04] px-5 py-10 [perspective:1000px] md:min-h-[32rem]">
                        <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-size-[120px_120px]"
      />
          <div
            className="relative grid w-full grid-cols-3 place-items-center gap-x-3 gap-y-8 transition-transform duration-700 ease-out sm:grid-cols-4 sm:gap-x-8 sm:gap-y-12"
            style={{
              transform:
                selectedTool === null
                  ? "rotateX(12deg) rotateY(-8deg)"
                  : `rotateX(${((selectedTool % 5) - 2) * 6 + 12}deg) rotateY(${((selectedTool % 7) - 3) * 8 - 8}deg)`,
            }}
          >
            {tools.map((item, index) => (
              <button
                key={index}
                type="button"
                aria-pressed={selectedTool === index}
                onClick={() =>
                  setSelectedTool(selectedTool === index ? null : index)
                }
                className={`relative flex min-h-16 min-w-16 items-center justify-center px-3 py-2 text-center font-satoshi text-xs font-bold transition-all duration-400 sm:min-h-20 sm:min-w-20 sm:text-sm ${
                  selectedTool === index
                    ? "scale-110 text-cream glass bg-cream/15 backdrop-blur-lg"
                    : " hover:scale-110 hover:border-blue "
                }`}
                style={{
                  transform: `translateZ(${index % 3 === 0 ? 24 : index % 3 === 1 ? -12 : 8}px)`,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={140}
                  height={140}
                  className="h-20 w-20 sm:h-25 sm:w-25 object-contain"
                />
                {selectedTool && (<p className="absolute top-0 right-0">{item.name}</p>)}
              </button>
            ))}
          </div>
          {/* <div className="pointer-events-none absolute inset-x-8 top-1/2 border-t border-dashed border-blue/25" /> */}
          {/* <div className="pointer-events-none absolute inset-y-8 left-1/2 border-l border-dashed border-blue/25" /> */}
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t-2 border-ink pt-8 md:mt-32 md:flex md:items-center md:justify-between">
          <p className="max-w-2xl font-general text-lg leading-8 text-secondary">
            I&apos;m comfortable moving between interface, logic, data, testing,
            and the systems that connect them.
          </p>

          <span className="mt-6 block font-satoshi text-sm font-bold uppercase tracking-[0.2em] text-blue md:mt-0">
            Build → Test → Ship
          </span>
        </div>
      </div>
    </section>
  );
};

export default SkillsIntro;
