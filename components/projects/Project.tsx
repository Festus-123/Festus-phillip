"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  getProjectInitials,
  formatProjectType,
} from "@/lib/helpers/projectHelpers";

import { links, projectSections } from "@/data/projects";
import {
  cardHover,
  imageReveal,
  magnetic,
  stagger,
  textReveal,
} from "@/animations";

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
      {/* huge title */}

      <div className="h-[90vh] sticky top-55 z-0 ">
        <h1 className=" text-center font-satoshi text-[clamp(4em,12vw,12em)] font-extrabold uppercase leading-none tracking-[-0.06em] text-brand-gradient">
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
                  {/* ================================================
            CATEGORY INTRO
        ================================================= */}

                  <div className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr] md:items-end">
                    <div>
                      {/* <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blue">
                        {String(
                          [
                            "fullstack",
                            "frontend",
                            "backend",
                            "mobile",
                            "automation",
                          ].indexOf(section.type) + 1,
                        ).padStart(2, "0")}
                      </p> */}

                      <h2 className="font-satoshi text-[clamp(2.8rem,6vw,6rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.05em] text-ink">
                        {section.title}
                      </h2>
                    </div>

                    <p className="max-w-2xl font-general text-base leading-7 text-secondary md:text-lg">
                      {section.description}
                    </p>
                  </div>

                  {/* break line */}

                  <div className="mb-10 h-[0.5px] w-full bg-ink" />

                  {/* projects */}
                  <div className="grid gap-12 md:grid-cols-2 lg:gap-x-14 lg:gap-y-20">
                    {projects.map((item, projectIndex) => {
                      const isBackend = item.type === "backend";

                      return (
                        <article
                          key={item.slug}
                          data-project-card
                          className={`group relative bg-cream-light border rounded-xl ${
                            projectIndex % 2 !== 0 ? "md:translate-y-16" : ""
                          }`}
                        >
                          {/* ==========================================
                    PROJECT VISUAL
                =========================================== */}

                          <Link
                            href={`/projects/${item.slug}`}
                            className="block"
                            aria-label={`View ${item.name} project`}
                          >
                            {isBackend ? (
                              /* ======================================
                       BACKEND PROJECT
                    ======================================= */

                              <div
                                data-project-image
                                className="relative aspect-16/11 overflow-hidden bg-brand-gradient"
                              >
                                {/* Decorative circles */}

                                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-2 border-white/20" />

                                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-2 border-gold/40" />

                                {/* Grid */}

                                <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:40px_40px]" />

                                {/* Project initials */}

                                <div className="relative flex h-full items-center justify-center">
                                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-ink shadow-[8px_8px_0_var(--color-gold)] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 md:h-40 md:w-40">
                                    <span className="font-satoshi text-5xl font-black uppercase tracking-[-0.08em] text-white md:text-6xl">
                                      {getProjectInitials(item.name)}
                                    </span>
                                  </div>
                                </div>

                                {/* Decorative project number */}

                                <span className="absolute bottom-5 left-5 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                                  Backend /{" "}
                                  {String(projectIndex + 1).padStart(2, "0")}
                                </span>
                              </div>
                            ) : (
                              /* ======================================
                       IMAGE PROJECT
                    ======================================= */

                              <div
                                data-project-image
                                className="relative aspect-2/1  overflow-hidden bg-cream-light"
                              >
                                <div
                                  data-image-reveal-mask
                                  className="absolute inset-0 z-10"
                                />

                                <div
                                  data-image-reveal
                                  className="h-full w-full"
                                >
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    priority={projectIndex < 2}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                  />
                                </div>
                              </div>
                            )}
                          </Link>

                          {/* ==========================================
                    PROJECT INFORMATION
                =========================================== */}

                          <div className="mt-6 ">
                            <div className="flex items-start justify-between gap-5 p-4">
                              <div>
                                {/* <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                        {String(projectIndex + 1).padStart(2, "0")} /{" "}
                        {item.year}
                      </p> */}

                                <Link
                                  href={`/projects/${item.slug}`}
                                  className="group/title inline-block"
                                >
                                  <h3 className="font-satoshi text-2xl font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover/title:text-blue md:text-3xl">
                                    {item.name}
                                  </h3>
                                </Link>
                              </div>

                              {/* External links */}

                              <div className="flex shrink-0 items-center gap-2">
                                {item.github_site && (
                                  <Link
                                    href={item.github_site}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`View ${item.name} on GitHub`}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-light text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
                                  >
                                    {item.github ? (
                                      <Image
                                        src={item.github}
                                        alt="GitHub"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6 object-contain"
                                      />
                                    ) : (
                                      <span className="font-mono text-xs font-bold">
                                        GH
                                      </span>
                                    )}
                                  </Link>
                                )}

                                {item.site && (
                                  <Link
                                    href={item.site}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Visit ${item.name} website`}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink bg-blue text-white transition-colors duration-300 hover:bg-blue hover:text-white"
                                  >
                                    <RiArrowRightUpLine className="text-xl" />
                                  </Link>
                                )}
                              </div>
                            </div>

                            {/* Tagline */}

                            {/* <div className="mt-4 flex items-end justify-between gap-5 border-b-2 border-ink pb-5">
                    <p className="max-w-xl font-general text-sm leading-6 text-secondary md:text-base">
                      {item.tagline}
                    </p>

                    <Link
                      data-project-link
                      href={`/projects/${item.slug}`}
                      className="hidden shrink-0 border-b-2 border-blue pb-1 font-satoshi text-xs font-bold uppercase tracking-[0.15em] text-blue sm:block"
                    >
                      View Project
                    </Link>
                  </div> */}

                            {/* Stack */}

                            {/* <div className="mt-4 flex flex-wrap gap-2">
                    {item.stacks.slice(0, 5).map((stack) => (
                      <span
                        key={stack}
                        className="border border-ink/20 bg-cream-light px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                      >
                        {stack}
                      </span>
                    ))}
                  </div> */}
                          </div>
                        </article>
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
                href="/contact"
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
