"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { skillCategories } from "@/data/skills";
import { cardHover, floating, stagger, textReveal } from "@/animations";

const SkillsIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
        <div className="grid gap-8 md:grid-cols-12">
          {skillCategories
            .filter((category) =>
              ["frontend", "backend", "mobile"].includes(category.id),
            )
            .map((category) => {
              const isFrontend = category.id === "frontend";

              return (
                <article
                  key={category.id}
                  data-skill-card
                  className={[
                    "relative overflow-hidden rounded-sm p-7 md:p-9",
                    isFrontend ? "md:col-span-12" : "md:col-span-6",
                    category.accent === "blue"
                      ? "bg-blue text-white card-offset"
                      : "",
                    category.accent === "gold"
                      ? "bg-gold text-ink card-offset"
                      : "",
                    category.accent === "ink"
                      ? "bg-ink text-white card-offset"
                      : "",
                  ].join(" ")}
                >
                  {/* Decorative number */}
                  <span
                    data-skill-decor
                    className={[
                      "absolute -right-4 -top-8 select-none font-satoshi text-[9rem] font-bold leading-none opacity-10 md:text-[12rem]",
                      category.accent === "gold" ? "text-ink" : "text-white",
                    ].join(" ")}
                  >
                    {category.number}
                  </span>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-10 flex items-start justify-between">
                      <span
                        className={[
                          "font-satoshi text-xs font-bold uppercase tracking-[0.2em]",
                          category.accent === "gold"
                            ? "text-ink/60"
                            : "text-white/60",
                        ].join(" ")}
                      >
                        {category.number}
                      </span>

                      <span
                        className={[
                          "h-3 w-3 rounded-full",
                          category.accent === "blue"
                            ? "bg-gold"
                            : category.accent === "gold"
                              ? "bg-blue"
                              : "bg-gold",
                        ].join(" ")}
                      />
                    </div>

                    <h3 className="font-satoshi text-3xl font-bold tracking-tight md:text-4xl">
                      {category.title}
                    </h3>

                    <p
                      className={[
                        "mt-4 max-w-lg font-general text-lg leading-6 ",
                        category.accent === "gold"
                          ? "text-ink/70"
                          : "text-white/70",
                      ].join(" ")}
                    >
                      {category.description}
                    </p>

                    {/* Skill pills */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={[
                            "border px-3 py-2 font-general text-sm font-medium",
                            category.accent === "gold"
                              ? "border-ink/20 bg-white/30 text-ink"
                              : "border-white/20 bg-white/10 text-white",
                          ].join(" ")}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
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
