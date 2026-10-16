"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { assets } from "@/public/assets/asset";
import { useRouter } from "next/navigation";

import { about, codeIntro, dreams, hobbies, personal } from "@/data/mydata";

import {
  textReveal,
  imageReveal,
  stagger,
  cardHover,
  magnetic,
  floating,
} from "@/animations";
import Panel from "../panel/Panel";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [coding, setCoding] = useState<boolean>(false);
  const router = useRouter();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const intro =
        sectionRef.current.querySelector<HTMLElement>("[data-about-intro]");

      const story =
        sectionRef.current.querySelector<HTMLElement>("[data-about-story]");

      const image =
        sectionRef.current.querySelector<HTMLElement>("[data-about-image]");

      const cards =
        sectionRef.current.querySelectorAll<HTMLElement>("[data-about-card]");

      const decorations = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-about-decoration]",
      );

      const resume = sectionRef.current.querySelector<HTMLElement>(
        "[data-about-resume]",
      );

      if (intro) {
        textReveal(intro, {
          variant: "line",
        });
      }

      if (story) {
        textReveal(story, {
          variant: "line",
          delay: 0.1,
        });
      }

      if (image) {
        imageReveal(image, {
          variant: "left",
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

      decorations.forEach((item) => {
        floating(item, {
          variant: "gentle",
        });
      });

      if (resume) {
        magnetic(resume, {
          variant: "subtle",
        });
      }
    },
    {
      scope: sectionRef,
    },
  );

  const handleSimulationComplete = () => {
    window.setTimeout(() => {
      router.push("#contact");
      setCoding(false);
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-size-[120px_120px]"
      />
      <div className="mx-auto max-w-7xl">
        {/* =========================================================
            INTRO
        ========================================================= */}

        <div className="relative mb-24 md:mb-32">
          <p className="mb-8 font-satoshi text-sm font-bold uppercase tracking-[0.25em] text-blue">
            More About Me
          </p>

          <h1
            data-about-intro
            className="max-w-6xl font-satoshi text-5xl font-bold leading-[0.9] tracking-tight text-ink md:text-7xl lg:text-[8rem]"
          >
            I&apos;m {personal.name}.
            <br />
            <span className="text-brand-gradient">I build things.</span>
          </h1>

          {/* Decorative number */}
          <span
            data-about-decoration
            className="pointer-events-none md:absolute -right-10 -top-16 select-none font-satoshi text-[clamp(6rem,6vw,12rem)] font-bold leading-none text-blue/5 md:text-[18rem]"
          >
            ;
          </span>
        </div>

        {/* =========================================================
            STORY + IMAGE
        ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">
          {/* Image */}
          <div data-about-image className="relative lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden border-2 border-ink bg-cream-dark card-offset grayscale transition-all duration-300 hover:grayscale-0">
              <div
                data-image-reveal-mask
                className="absolute inset-0 z-10 bg-blue"
              />

              <Image
                data-image-reveal
                src={assets.profile}
                alt={personal.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw,"
              />

              <div className="absolute bottom-5 left-5 z-20 bg-cream px-4 py-3 font-satoshi text-xs font-bold uppercase tracking-wider text-ink">
                {personal.title}
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-7">
            <p className="mb-6 font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-blue">
              The person behind the code
            </p>

            <div
              data-about-story
              className="font-general text-lg leading-8 text-secondary md:text-2xl md:leading-[1.7]"
            >
              <p>
                <span className="font-satoshi font-bold text-ink">Hi 👋.</span>{" "}
                {about.long[0]}
              </p>{" "}
              <br />
              <br />
              <p>{about.long[1]}</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="border border-ink bg-white/40 px-4 py-2 font-satoshi text-xs font-bold uppercase tracking-wider">
                {personal.experience}
              </span>

              <span className="border border-ink bg-white/40 px-4 py-2 font-satoshi text-xs font-bold uppercase tracking-wider">
                Computer Science
              </span>

              <span className="border border-ink bg-white/40 px-4 py-2 font-satoshi text-xs font-bold uppercase tracking-wider">
                Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            PERSONALITY / CODE BLOCK
        ========================================================= */}

        <div className="relative my-28 md:my-40">
          <div className="mb-8">
            <p className="font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-blue">
              When I&apos;m not coding
            </p>
          </div>

          <div
            data-about-card
            className="relative overflow-hidden border-2 border-ink bg-ink p-7 text-white card-offset md:p-12"
          >
            {/* Decorative code symbol */}
            <span
              data-about-decoration
              className="absolute -right-5 -top-12 font-mono text-[12rem] font-bold leading-none text-white/[0.035] md:text-[18rem]"
            >
              {"}"}
            </span>

            <div className="relative z-10 font-mono text-sm leading-8 md:text-lg md:leading-9">
              <div className="text-white/40 ">
                <span>
                  const {"{"} coding, setCoding {"}"} = useState{"<"}boolean
                  {">"}(false); <br /> <br />
                </span>
                <span className="text-gold text-white/40">let</span> festus:{" "}
                <span className="text-green-500">ACTS</span> = {"{}"}
              </div>

              <div className=" text-white/70 mt-10">
                <div>{codeIntro[0]?.text ?? "do_something_fun"}</div>
              </div>

              <div className="pl-6 md:pl-10 text-white/40">
                <span className="text-blue-bright ">festus</span>{" "}
                <span className="text-gold">=</span> {"{"}
              </div>

              <div className="pl-10 md:pl-14">
                {hobbies.map((hobby) => (
                  <div key={hobby.name}>
                    <span className="text-blue-bright text-white/60">
                      {hobby.name}
                    </span>
                    :{" "}
                    <span
                      className={hobby.active ? "text-gold" : "text-white/50"}
                    >
                      {String(hobby.active)}
                    </span>
                    ,
                  </div>
                ))}
              </div>
              <div className="text-white/40 mt-2 pl-6 md:pl-10">{"}"}</div>

              <div className="text-white/40 ml-6 md:ml-10">
                console.log(`Festus is open to work: ${"{"}festus{"}"} `)
              </div>

              <div className="text-white/40">{"}"};</div>

              <div className=" text-white/70 mt-10">
                <div>console.log(`Let&apos; Build something useful; 😎`)</div>
              </div>
            </div>

            {coding && (
              <div className="absolute left-1/2 top-1/2 z-20 w-[90%] -translate-x-1/2 -translate-y-1/2 md:w-auto">
                {/* <div
                  data-image-reveal-mask
                  className="absolute inset-0 z-10 bg-blue"
                /> */}

                <Panel
                  title="processing"
                  command="npm run dev"
                  output={[
                    "C://festusphillip/about> npm run dev",
                    "Starting the development server...",
                    "dev server: https://festusphillip.dev",
                    "opening path: https://festusphillip.dev/contact",
                  ]}
                  onComplete={handleSimulationComplete}
                />
              </div>
            )}
            <button
              disabled={coding}
              onClick={() => setCoding(true)}
              className="card-offset text-black p-3 w-full max-w-sm tracking-widest cursor-pointer absolute bottom-4 right-4 bg-cream"
            >
              () {"=>"} setCoding(true);
            </button>
          </div>
        </div>

        {/* =========================================================
            DIRECTION / DREAM
        ========================================================= */}

        <div className="grid gap-8 md:grid-cols-2">
          <article
            data-about-card
            className="relative overflow-hidden border-2 border-blue bg-blue p-8 text-white card-offset-blue md:p-10"
          >
            <span className="font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-cream-light">
              02 — Direction
            </span>

            <h2 className="mt-12 font-satoshi text-4xl font-bold leading-tight md:text-5xl">
              I&apos;m building toward something bigger.
            </h2>

            <p className="mt-6 max-w-lg font-general text-sm leading-7 text-white/70">
              {dreams.career.description}
            </p>
          </article>

          <article
            data-about-card
            className="relative overflow-hidden border-2 border-gold bg-gold p-8 text-ink card-offset-gold md:p-10"
          >
            <span className="font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              03 — Beyond Code
            </span>

            <h2 className="mt-12 font-satoshi text-4xl font-bold leading-tight md:text-5xl">
              There&apos;s a life outside the editor.
            </h2>

            <div className="mt-8 flex flex-wrap gap-2">
              {hobbies
                ?.filter((hobby) => hobby.active)
                .map((hobby) => (
                  <span
                    key={hobby.name}
                    className="border border-ink/20 bg-white/30 px-3 py-2 font-general text-xs font-medium"
                  >
                    {hobby.name}
                  </span>
                ))}
            </div>
          </article>
        </div>

        {/* =========================================================
            RESUME
        ========================================================= */}

        <div className="mt-24 flex flex-col gap-8 border-t-2 border-ink pt-10 md:mt-32 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-muted">
              Want the longer version?
            </p>

            <h3 className="mt-3 font-satoshi text-3xl font-bold text-ink md:text-4xl">
              Take a look at my resume.
            </h3>
          </div>

          <a
            data-about-resume
            href="https://drive.google.com/file/d/14z9tkaJtv9_S3YpeBowFO5kl3Ph0xuAG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 self-start border-2 border-ink bg-ink px-6 py-4 font-satoshi text-sm font-bold uppercase tracking-wider text-white md:self-auto"
          >
            View Resume
            <FiArrowUpRight className="text-lg text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
