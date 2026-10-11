"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import Image from "next/image";

import { cardHover, magnetic } from "@/animations";
import type { Project } from "@/data/projects";
import {
  getProjectInitials,
  formatProjectType,
} from "@/lib/helpers/projectHelpers";

type ProjectCardProps = {
  item: Project;
  isBackend: boolean;
  projectIndex?: number;
};

const ProjectCard = ({
  item,
  isBackend,
  projectIndex = 0,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      const removeCardHover = cardHover(cardRef.current, {
        variant: "subtle",
      });
      const removeMagnetic = linkRef.current
        ? magnetic(linkRef.current, { variant: "subtle" })
        : undefined;

      return () => {
        removeCardHover();
        removeMagnetic?.();
      };
    },
    { scope: cardRef },
  );

  return (
    <article
      key={item.slug}
      data-project-card
      className={`group relative bg-cream-light/15 glass backdrop-blur-3xl border rounded-xl ${
        projectIndex % 2 !== 0 ? "md:translate-y-16" : ""
      }`}
    >


      <div className="block" aria-label={`View ${item.name} project`}>
        {isBackend ? (


          <div
            data-project-image
            className="relative aspect-16/11 overflow-hidden bg-blue"
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
              Backend / {String(projectIndex + 1).padStart(2, "0")}
            </span>
          </div>
        ) : (


          <div
            data-project-image
            className="relative aspect-2/1  overflow-hidden bg-cream-light"
          >
            <div data-image-reveal-mask className="absolute inset-0 z-10" />

            <div data-image-reveal className="h-full w-full">
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
      </div>


      <div className="mt-6 ">
        <div className="flex items-start justify-between gap-5 p-4">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {String(projectIndex + 1).padStart(2, "0")} / {item.year}
            </p>

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
                  <span className="font-mono text-xs font-bold">GH</span>
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

        {/* Stack */}

        <div className="mt-4 flex flex-wrap gap-2 p-3">
          {item.stacks.slice(0, 5).map((stack) => (
            <span
              key={stack}
              className="border border-ink/20 bg-cream-light px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Tagline */}

        <div className="mt-4 flex items-end justify-between gap-5 p-3">
          <p className="max-w-xl font-general text-sm leading-6 text-secondary md:text-base">
            {item.tagline}
          </p>

          {/* <button
            data-project-link
            className="hidden shrink-0 bg-gold p-3 rounded-lg cursor-pointer font-satoshi text-xs font-bold uppercase tracking-[0.15em] text-white sm:block"
          >
            Live Demo
          </button> */}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
