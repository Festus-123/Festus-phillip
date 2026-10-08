"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useRef } from "react";

import { links } from "@/data/projects";
import {
  textReveal,
  imageReveal,
  stagger,
  cardHover,
  magnetic,
} from "@/animations";

const ProjectPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const pageRef = useRef<main>(null);

  const project = links.find((item) => item.slug === slug);

  const index = links.findIndex((item) => item.slug === slug);

  const previousProject = index > 0 ? links[index - 1] : null;
  const nextProject = index < links.length - 1 ? links[index + 1] : null;

  useGSAP(
    () => {
      if (!pageRef.current || !project) return;

      const heroTitle = pageRef.current.querySelector<HTMLElement>(
        "[data-project-title]",
      );

      const heroTagline = pageRef.current.querySelector<HTMLElement>(
        "[data-project-tagline]",
      );

      const heroMeta = pageRef.current.querySelectorAll("[data-project-meta]");

      const projectImage = pageRef.current.querySelector<HTMLElement>(
        "[data-project-image]",
      );

      const overviewItems = pageRef.current.querySelectorAll(
        "[data-project-overview]",
      );

      const highlightItems = pageRef.current.querySelectorAll(
        "[data-project-highlight]",
      );

      const featureItems = pageRef.current.querySelectorAll(
        "[data-project-feature]",
      );

      const links = pageRef.current.querySelectorAll("[data-project-link]");

      if (heroTitle) {
        textReveal(heroTitle, {
          variant: "line",
          delay: 0.15,
        });
      }

      if (heroTagline) {
        gsap.from(heroTagline, {
          opacity: 0,
          y: 25,
          duration: 0.7,
          delay: 0.35,
          ease: "power3.out",
        });
      }

      if (heroMeta.length) {
        stagger(heroMeta, {
          variant: "fast",
          delay: 0.2,
        });
      }

      if (projectImage) {
        imageReveal(projectImage, {
          variant: "left",
          maskColor: "var(--color-blue)",
        });
      }

      if (overviewItems.length) {
        stagger(overviewItems, {
          variant: "default",
          delay: 0.1,
        });
      }

      if (highlightItems.length) {
        stagger(highlightItems, {
          variant: "default",
          delay: 0.05,
        });
      }

      if (featureItems.length) {
        stagger(featureItems, {
          variant: "fast",
          delay: 0.05,
        });
      }

      links.forEach((link) => {
        cardHover(link as HTMLElement, {
          variant: "subtle",
        });

        magnetic(link as HTMLElement, {
          variant: "subtle",
        });
      });
    },
    {
      scope: pageRef,
    },
  );

  if (!project) {
    return null;
  }

  return (
    <main ref={pageRef} className="min-h-screen bg-cream text-ink">
      {/* ------------------------------------------------
          HERO
      ------------------------------------------------ */}
      <section className="px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Back */}
          <Link
            href="/projects"
            className="mb-14 inline-flex items-center gap-2 border-2 border-ink bg-cream-light px-4 py-3 font-satoshi text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_var(--color-ink)] transition hover:-translate-y-1 hover:shadow-[5px_5px_0_var(--color-ink)]"
          >
            <ArrowLeft size={16} />
            Projects
          </Link>

          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span
              data-project-meta
              className="border-2 border-blue bg-blue px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-white"
            >
              {project.category}
            </span>

            <span
              data-project-meta
              className="border-2 border-ink bg-cream-light px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest"
            >
              {project.year}
            </span>

            <span
              data-project-meta
              className="border-2 border-gold-dark bg-gold-light px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-ink"
            >
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h1
            data-project-title
            className="max-w-6xl font-satoshi text-6xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[9rem]"
          >
            {project.name}
          </h1>

          {/* Tagline */}
          <p
            data-project-tagline
            className="mt-8 max-w-3xl font-general text-xl leading-8 text-secondary md:text-2xl"
          >
            {project.tagline}
          </p>


          <div className="flex flex-wrap gap-3 mt-4">
            {project.stacks.map((stack) => (
              <div
                key={stack}
                data-project-overview
                className="border-2 border-ink bg-cream-light px-5 py-3 font-satoshi text-sm font-bold "
              >
                {stack}
              </div>
            ))}
          </div>

          {/* Hero image */}
          <div
            data-project-image
            className="relative mt-16 overflow-hidden bg-cream-dark md:mt-20"
          >
            <div data-image-reveal-mask className="absolute inset-0 z-10" />

            <div data-image-reveal>
              <Image
                src={project.image}
                alt={`${project.name} project preview`}
                width={1600}
                height={1000}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          OVERVIEW
      ------------------------------------------------ */}
      <section className="border-y-2 border-ink bg-ink px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.5fr_1fr]">
          <div data-project-overview>
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue">
              Project Overview
            </p>

            <p className="max-w-3xl font-general text-lg leading-8 text-secondary md:text-xl md:leading-9">
              {project.description}
            </p>
          </div>

          <div
            data-project-overview
            className="border-2 border-ink bg-cream p-6 card-offset"
          >
            <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted">
              My Role
            </p>

            <p className="font-satoshi text-2xl font-black">{project.role}</p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          LINKS
      ------------------------------------------------ */}
      <section className="bg-ink px-6 py-20 text-white md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-light">
              Explore
            </p>

            <h2 className="mt-3 max-w-xl font-satoshi text-4xl font-black tracking-tight md:text-6xl">
              See it in action.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.site && (
              <Link
                data-project-link
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-gold bg-gold px-6 py-4 font-satoshi text-sm font-black uppercase tracking-wider text-ink"
              >
                Live Project
                <ArrowUpRight size={18} />
              </Link>
            )}

            {project.github_site && (
              <Link
                data-project-link
                href={project.github_site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-white bg-white/5 px-6 py-4 font-satoshi text-sm font-black uppercase tracking-wider text-white"
              >
                GitHub
                <SiGithub size={18} />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          PREVIOUS / NEXT
      ------------------------------------------------ */}
      <section className="border-t-2 border-ink bg-cream-light px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {previousProject ? (
            <Link
              href={`/projects/${previousProject.slug}`}
              className="group border-2 border-ink bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white md:p-8"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Previous project
              </span>

              <div className="mt-8 flex items-center justify-between gap-5">
                <h3 className="font-satoshi text-2xl font-black md:text-3xl">
                  {previousProject.name}
                </h3>

                <ArrowLeft
                  size={25}
                  className="transition-transform duration-300 group-hover:-translate-x-2"
                />
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group border-2 border-ink bg-cream p-6 text-right transition-all duration-300 hover:-translate-y-1 hover:bg-white md:p-8"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Next project
              </span>

              <div className="mt-8 flex items-center justify-between gap-5">
                <ArrowUpRight
                  size={25}
                  className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                />

                <h3 className="font-satoshi text-2xl font-black md:text-3xl">
                  {nextProject.name}
                </h3>
              </div>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
