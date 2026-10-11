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
import ProjectCard from "../project-card/ProjectCard";

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
            const isBackend = project.type === "frontend";

            return (
              <ProjectCard 
                key={index}
                projectIndex={index}
                item={project}
                isBackend={!isBackend}/>
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
