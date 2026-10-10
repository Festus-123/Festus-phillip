"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { X, Grid2X2 } from "lucide-react";

import { dirItems } from "@/data/dir";

const DirBar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!panelRef.current) return;

      const panel = panelRef.current;
      const items = panel.querySelectorAll("[data-dir-item]");

      if (isOpen) {
        gsap.set(panel, {
          display: "block",
        });

        gsap.fromTo(
          panel,
          {
            height: 0,
            opacity: 0,
          },
          {
            height: "auto",
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          items,
          {
            y: -20,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.07,
            delay: 0.12,
            ease: "back.out(1.4)",
          },
        );
      } else {
        gsap.to(items, {
          y: -10,
          opacity: 0,
          scale: 0.97,
          duration: 0.2,
          stagger: 0.03,
          ease: "power2.in",
        });

        gsap.to(panel, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          delay: 0.08,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(panel, { display: "none" });
          },
        });
      }
    },
    {
      scope: containerRef,
      dependencies: [isOpen],
    },
  );

  const togglePanel = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div
      ref={containerRef}
      className="fixed top-5 right-5 z-1000 w-[min(92vw,420px)] md:right-8 md:top-8"
    >
      {/* Control Button */}
      <button
        type="button"
        onClick={togglePanel}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        className="
          ml-auto flex items-center gap-5
          border-2 border-ink
          bg-cream-light
          px-4 py-3
          font-satoshi
          
          transition-all duration-300
          hover:-translate-x-1
          hover:-translate-y-1
          hover:shadow-[7px_7px_0_var(--color-ink)]
        "
      >
        <span className="text-lg font-black tracking-tight text-ink">
          FC
        </span>

        <span className="flex h-8 w-8 items-center justify-center bg-blue text-white">
          {isOpen ? (
            <X size={18} strokeWidth={2.5} />
          ) : (
            <Grid2X2 size={18} strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/* Control Panel */}
      <div
        ref={panelRef}
        className="
          mt-3
          hidden
          h-0
          overflow-hidden
          border-2 border-ink
          bg-cream-light
          shadow-[7px_7px_0_var(--color-ink)]
        "
      >
        <div className="p-4 md:p-5">
          {/* Panel Header */}
          <div className="mb-4 flex items-end justify-between border-b border-cream-dark pb-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                Directory
              </p>

              <h2 className="mt-1 font-satoshi text-xl font-black uppercase tracking-tight text-ink">
                Navigate
              </h2>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-widest text-blue">
              FC / 07
            </span>
          </div>

          {/* Bento Navigation */}
          <div className="grid grid-cols-2 gap-3">
            {dirItems.map((item, index) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  data-dir-item
                  onClick={() => setIsOpen(false)}
                  className={`
                    group relative
                    flex min-h-28 flex-col
                    justify-between
                    overflow-hidden
                    border-2 border-ink
                    p-4
                    transition-all duration-300
                    ${
                      index === dirItems.length - 1
                        ? "col-span-2"
                        : ""
                    }
                    ${
                      isActive
                        ? "bg-blue text-white"
                        : "bg-cream text-ink hover:-translate-y-1 hover:bg-gold hover:text-ink"
                    }
                  `}
                >
                  {/* Decorative corner */}
                  <span
                    className={`
                      absolute right-2 top-2 h-2 w-2
                      ${
                        isActive
                          ? "bg-gold-light"
                          : "bg-gold"
                      }
                    `}
                  />

                  {/* Icon */}
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
                  />

                  {/* Label */}
                  <div className="flex items-end justify-between gap-3">
                    <span className="font-satoshi text-sm font-black uppercase tracking-tight">
                      {item.label}
                    </span>

                    <span className="font-mono text-[9px] opacity-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Status */}
          <div className="mt-4 flex items-center justify-between border-t border-cream-dark pt-3">
            <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              System ready
            </span>

            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              {pathname === "/" ? "Portfolio" : pathname.replace("/", "")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirBar;