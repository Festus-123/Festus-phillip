"use client";

import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { links } from "@/data/projects";
import {
  cardHover,
  imageReveal,
  magnetic,
  stagger,
  textReveal,
} from "@/animations/index";

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
      className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20 border-t border-ink/50"
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
              className="font-satoshi text-5xl font-bold leading-normal tracking-tight text-ink md:text-7xl lg:text-8xl"
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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {selectedProjects.map((project, index) => (
            <article
              key={project.slug}
              data-project-card
              className={`group ${
                index === 1 ? "lg:mt-24" : ""
              }`}
            >
              {/* Image */}
              <Link
                href={`/projects/${project.slug}`}
                className="block"
              >
                <div
                  data-image-reveal-container
                  className="relative aspect-[4/3] overflow-hidden border-2 border-ink bg-cream-dark card-offset"
                >
                  <div
                    data-image-reveal-mask
                    className="absolute inset-0 z-10 bg-blue"
                  />

                  <Image
                    data-image-reveal
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Project number */}
                  <span className="absolute left-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-cream font-satoshi text-sm font-bold text-ink">
                    0{index + 1}
                  </span>

                  {/* Category */}
                  <span className="absolute right-5 top-5 z-20 bg-ink px-3 py-2 font-satoshi text-xs font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="mt-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-2 font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-muted">
                      {project.year}
                    </p>

                    <h3 className="font-satoshi text-3xl font-bold tracking-tight text-ink md:text-4xl">
                      {project.name}
                    </h3>
                  </div>

                  <span className="hidden font-satoshi text-sm font-bold text-blue sm:block">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-4 max-w-xl font-general text-base leading-7 text-secondary">
                  {project.tagline}
                </p>

                {/* Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stacks.slice(0, 5).map((stack) => (
                    <span
                      key={stack}
                      className="border border-ink/15 bg-white/40 px-3 py-1.5 font-general text-xs text-muted"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  data-project-link
                  href={`/projects/${project.slug}`}
                  className="mt-8 inline-flex items-center gap-3 border-b-2 border-ink pb-2 font-satoshi text-sm font-bold uppercase tracking-wider text-ink"
                >
                  View project
                  <span className="text-blue">↗</span>
                </Link>
              </div>
            </article>
          ))}
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