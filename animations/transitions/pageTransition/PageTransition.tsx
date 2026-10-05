"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { pageTransition }  from "@/animations/pageTransition/pageTransition";
import { personal } from "@/data/mydata";

const PageTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      if (!containerRef.current) return;

      pageTransition(containerRef.current, {
        variant: "playful",
      });
    },
    {
      scope: containerRef,
      dependencies: [pathname],
    },
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Ink */}
      <div
        data-transition-curtain
        className="fixed inset-0 z-9999 bg-ink"
      />

      {/* Gold */}
      <div
        data-transition-curtain
        className="fixed inset-0 z-10000 bg-gold"
      />

      {/* Blue */}
      <div
        data-transition-curtain
        className="fixed inset-0 z-10001 bg-blue flex items-center justify-center font-satoshi text-[clamp(1.5rem,4vw,3rem)] uppercase tracking-[0.2em] text-transparent [-webkit-text-stroke:2px_#ffffff]"
      >
        {personal.firstName}
      </div>

      {children}
    </div>
  );
};

export default PageTransition;