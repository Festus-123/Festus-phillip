"use client";

import { useEffect, useState } from "react";

type PanelProps = {
  title?: string;
  prompt?: string;
  command?: string;
  output?: string[];
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;
  onComplete?: () => void;
};

const Panel = ({
  title = "new",
  prompt = "$",
  command = "pwd",
  output = ["/home/user/project"],
  actions = [],
  onComplete,
}: PanelProps) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    setVisibleLines([]);

    const timers = output.map((line, index) =>
      window.setTimeout(() => {
        setVisibleLines((current) => [...current, line]);

        if (index === output.length - 1) {
          window.setTimeout(() => {
            onComplete?.();
          }, 500);
        }
      }, 500 + index * 500),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [output, onComplete]);

  return (
    <div
      data-image-reveal
      className="w-full max-w-3xl overflow-hidden rounded-lg border border-[#3a8a7a] bg-[#0f1720] text-[#d7f7e8] shadow-[0_0_20px_rgba(58,138,122,0.35)]"
    >
      <header className="flex items-center justify-between border-b border-[#3a8a7a] bg-[#172b27] px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>

          <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-[#9de3c2]">
            {title}
          </span>
        </div>

        <span className="text-[10px] uppercase tracking-[0.2em] text-[#6fae98]">
          bash
        </span>
      </header>

      <div className="bg-[#0d1a1a] p-4 font-mono text-sm leading-6">
        <div className="mb-2 flex items-center gap-2 text-[#7ae7ad]">
          <span className="text-[#ffb86c]">{prompt}</span>
          <span>{command}</span>
        </div>

        <div className="space-y-1 text-[#d7f7e8]">
          {visibleLines.map((line, index) => (
            <p key={`${line}-${index}`}>{line}</p>
          ))}

          {visibleLines.length < output.length && (
            <span className="inline-block h-4 w-2 animate-pulse bg-[#7ae7ad]" />
          )}
        </div>

        {actions.length > 0 && visibleLines.length === output.length && (
          <div className="mt-4 flex flex-wrap gap-2">
            {actions.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={action.onClick}
                className="rounded border border-[#3a8a7a] bg-[#172b27] px-2.5 py-1 text-xs text-[#9de3c2] transition hover:border-[#7ae7ad] hover:text-[#d7f7e8]"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Panel;