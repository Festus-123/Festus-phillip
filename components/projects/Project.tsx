"use client";

// import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
// import { RiArrowRightUpLine } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import {
//   getProjectInitials,
//   formatProjectType,
// } from "@/lib/helpers/projectHelpers";

import { links, projectSections } from "@/data/projects";
import {
  cardHover,
  imageReveal,
  magnetic,
  stagger,
  textReveal,
} from "@/animations";
import ProjectCard from "../project-card/ProjectCard";

const Project = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const heading = sectionRef.current.querySelector<HTMLElement>(
        "[data-project-heading]",
      );

      const cards = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-project-card]",
      );

      const images = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-project-image]",
      );

      const links = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-project-link]",
      );

      if (heading) {
        textReveal(heading, {
          variant: "line",
        });
      }

      if (cards.length) {
        stagger(cards, {
          variant: "default",
        });

        cards.forEach((card) => {
          cardHover(card, {
            variant: "subtle",
          });
        });
      }

      images.forEach((image) => {
        imageReveal(image, {
          variant: "left",
          maskColor: "var(--color-blue)",
        });
      });

      links.forEach((link) => {
        magnetic(link, {
          variant: "subtle",
        });
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="relative bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-size-[120px_120px] bg-fixed"
      />

      {/* huge title */}
      <div className="h-[60vh] md:h-[90vh] sticky top-55 z-0 ">
        <h1 className=" text-center font-satoshi text-[clamp(6em,12vw,12em)] font-extrabold uppercase leading-none tracking-[-0.06em] text-brand-gradient">
          My Works
        </h1>
      </div>

      {/* project content */}
      <div className="relative z-10 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-12">
          {/* <p className="mb-6 font-satoshi text-sm font-bold uppercase tracking-[0.25em] text-blue">
            Explore my Works
          </p> */}
          {/* Section heading */}

          {/* <div className="mb-16 max-w-5xl">

            <h2
              data-project-heading
              className="font-satoshi text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-ink"
            >
              Things I&apos;ve{" "}
              <span className="text-brand-gradient">built.</span>
            </h2>

            <p className="mt-8 max-w-2xl font-general text-base leading-7 text-secondary md:text-lg">
              A collection of interfaces, applications, systems, and
              experiments I&apos;ve worked on across different areas of
              software development.
            </p>
          </div> */}

          {/* my projects */}

          <div className="space-y-32 md:space-y-44">
            {projectSections.map((section) => {
              const projects = links.filter(
                (project) => project.type === section.type,
              );

              if (!projects.length) return null;

              return (
                <div key={section.type}>


                  <div className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr] md:items-end">
                    <div>
                      <h2 className="font-satoshi text-[clamp(2.8rem,6vw,6rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.05em] text-ink">
                        {section.title}
                      </h2>
                    </div>
                    {/* 
                    <p className="max-w-2xl font-general text-base leading-7 text-secondary md:text-lg">
                      {section.description}
                    </p> */}
                  </div>

                  {/* break line */}

                  <div className="mb-10 h-[0.5px] w-full bg-ink" />

                  {/* projects */}
                  <div className="grid gap-12 md:grid-cols-2 lg:gap-x-14 lg:gap-y-20">
                    {projects.map((item, projectIndex) => {
                      const isBackend = item.type === "backend";

                      return (
                        <ProjectCard
                          key={projectIndex}
                          isBackend={isBackend}
                          projectIndex={projectIndex}
                          item={item}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* bottom note */}
          <div className="mt-32 border-t-2 border-ink pt-6">
            <div className="flex flex-col justify-between gap-4 font-mono text-xs uppercase tracking-[0.15em] text-muted sm:flex-row">
              <span>More projects →</span>

              <Link
                href="#contact"
                className="text-blue transition-colors hover:text-gold"
              >
                Let&apos;s build something
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
