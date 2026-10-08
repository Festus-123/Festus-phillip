"use client";

import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

import { links } from "@/data/projects";
import {
  cardHover,
  imageReveal,
  magnetic,
  stagger,
  textReveal,
} from "@/animations/index";
import {
  formatProjectType,
  getProjectInitials,
} from "@/lib/helpers/projectHelpers";

const SelectedWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const selectedProjects = links.slice(0, 2);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const heading = sectionRef.current.querySelector<HTMLElement>(
        "[data-works-heading]",
      );

      const projectCards = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-project-card]",
      );

      const projectImages = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-image-reveal-container]",
      );

      const projectLinks = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-project-link]",
      );

      if (heading) {
        textReveal(heading, {
          variant: "line",
        });
      }

      if (projectCards.length) {
        stagger(projectCards, {
          variant: "default",
          opacity: false,
        });

        projectCards.forEach((card) => {
          cardHover(card, {
            variant: "subtle",
          });
        });
      }

      projectImages.forEach((image) => {
        imageReveal(image, {
          variant: "left",
        });
      });

      projectLinks.forEach((link) => {
        magnetic(link, {
          variant: "default",
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
      className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <p className="mb-6 font-satoshi text-sm font-bold uppercase tracking-[0.25em] text-blue">
              Some of my Works
            </p>

            <h2
              data-works-heading
              className="font-satoshi text-5xl font-bold leading-[1.15] tracking-tight text-ink md:text-7xl lg:text-8xl"
            >
              Things I&apos;ve built,
              <br />
              <span className="text-brand-gradient">
                shipped &amp; explored.
              </span>
            </h2>
          </div>

          <p className="max-w-xs font-general text-sm leading-6 text-muted">
            A small selection of projects that represent how I approach
            products, interfaces, and problems.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-12 md:grid-cols-2 lg:gap-x-14 lg:gap-y-20">
          {selectedProjects.map((project, index) => {
            const isBackend = project.type === "backend";

            return (
              <article
                key={project.slug}
                data-project-card
                className={`group relative rounded-xl border bg-cream-light ${
                  index % 2 !== 0 ? "md:translate-y-16" : ""
                }`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block"
                  aria-label={`View ${project.name} project`}
                >
                  {isBackend ? (
                    <div
                      data-image-reveal-container
                      className="relative aspect-16/11 overflow-hidden bg-brand-gradient"
                    >
                      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-2 border-white/20" />
                      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-2 border-gold/40" />
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-size-[40px_40px]" />

                      <div className="relative flex h-full items-center justify-center">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-ink shadow-[8px_8px_0_var(--color-gold)] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 md:h-40 md:w-40">
                          <span className="font-satoshi text-5xl font-black uppercase tracking-[-0.08em] text-white md:text-6xl">
                            {getProjectInitials(project.name)}
                          </span>
                        </div>
                      </div>

                      <span className="absolute bottom-5 left-5 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                        {formatProjectType(project.type)} /{" "}
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ) : (
                    <div
                      data-image-reveal-container
                      className="relative aspect-2/1 overflow-hidden bg-cream-light"
                    >
                      <div
                        data-image-reveal-mask
                        className="absolute inset-0 z-10"
                      />

                      <div data-image-reveal className="h-full w-full">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          priority={index < 2}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                  )}
                </Link>

                <div className="mt-6">
                  <div className="flex items-start justify-between gap-5 p-4">
                    <div>


                      <Link
                        href={`/projects/${project.slug}`}
                        className="group/title inline-block"
                      >
                        <h3 className="font-satoshi text-2xl font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover/title:text-blue md:text-3xl">
                          {project.name}
                        </h3>
                      </Link>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {project.github_site && (
                        <Link
                          href={project.github_site}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.name} on GitHub`}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-light text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
                        >
                          {project.github ? (
                            <Image
                              src={project.github}
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

                      {project.site && (
                        <Link
                          href={project.site}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${project.name} website`}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink bg-blue text-white transition-colors duration-300 hover:bg-blue hover:text-white"
                        >
                          <RiArrowRightUpLine className="text-xl" />
                        </Link>
                      )}
                    </div>
                  </div>


                </div>
              </article>
            );
          })}
        </div>

        {/* All projects */}
        <div className="mt-20 flex justify-center border-t border-ink/10 pt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-4 bg-ink px-7 py-4 font-satoshi text-sm font-bold uppercase tracking-wider text-white transition-transform duration-300 hover:-translate-y-1"
          >
            View all projects
            <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
