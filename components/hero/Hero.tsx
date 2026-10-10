"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { heroEntrance } from "@/animations/heroEntrance/heroEntrance";
import { textReveal } from "@/animations/textReveal/textReveal";

import { personal } from "@/data/mydata";
import { assets } from "@/public/assets/asset";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current || !headingRef.current) return;

      const heroTimeline = heroEntrance(heroRef.current);

      textReveal(headingRef.current, {
        variant: "line",
      });

      heroTimeline.play();
    },
    {
      scope: heroRef,
    },
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-cream px-5 py-24 text-primary md:px-10 lg:px-16"
    >
      {/* Decorative background elements */}
      <div
        data-hero-decor
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue opacity-10 blur-3xl"
      />

      <div
        data-hero-decor
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 h-32 w-32 rounded-full bg-gold opacity-15 blur-2xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-size-[120px_120px]"
      />

      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT — CONTENT */}
          <div className="relative z-10">
            {/* Intro */}
            <div
              data-hero-intro
              className="mb-6 flex items-center gap-3 font-general text-sm font-medium uppercase tracking-[0.2em] text-muted"
            >
              <span className="h-2 w-2 rounded-full bg-blue" />
              <span>{personal.title}</span>
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              data-hero-heading
              className="max-w-4xl font-satoshi text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-[5.5rem]"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent [-webkit-text-stroke:2px_#000000]">
                {personal.firstName}.
              </span>
              <br />I build for the web.
            </h1>

            {/* Description */}
            <p
              data-hero-description
              className="mt-8 max-w-2xl font-general text-sm leading-6 text-muted md:text-base md:leading-7"
            >
              A software developer focused on building modern web and mobile
              applications with JavaScript technologies.
            </p>

            {/* Actions */}
            <div data-hero-action className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="card-offset-blue inline-flex items-center justify-center bg-blue px-5 py-2.5 font-general text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-1 "
              >
                View Projects
              </Link>

              <a
                href="#contact"
                className="card-offset inline-flex items-center justify-center bg-cream-light px-5 py-2.5 font-general text-xs font-semibold text-primary transition-transform duration-300 hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>

            {/* Tech strip */}
            <div
              data-hero-social
              className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 font-general text-xs font-medium uppercase tracking-[0.12em] text-muted"
            >
              <span>React</span>
              <span className="text-gold">✦</span>
              <span>Next.js</span>
              <span className="text-gold">✦</span>
              <span>TypeScript</span>
              <span className="text-gold">✦</span>
              <span>React Native</span>
            </div>
          </div>

          {/* RIGHT — PROFILE / VISUAL */}
          <div
            data-hero-decor
            className="relative mx-auto w-full max-w-xs lg:ml-auto"
          >
            {/* Back card */}
            <div className="absolute -right-4 -top-4 h-full w-full rotate-3 border-2 border-gold bg-gold" />

            {/* Main card */}
            <div className="card-offset-blue relative overflow-hidden bg-blue p-3">
              <div className="relative aspect-4/5 overflow-hidden bg-cream-dark">
                {/* Add your image here */}
                <div className="flex h-full items-center justify-center">
                  <Image
                    src={assets.profile}
                    alt="Profile Image"
                    className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
                  />
                </div>

                {/* Image label */}
                <div className="absolute bottom-4 left-4 bg-cream px-4 py-2 font-general text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  Software Developer
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between px-2 pb-1 pt-4 font-general text-xs uppercase tracking-[0.12em] text-white">
                <span>{personal.firstName} A.</span>
                <span>001 / 026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
