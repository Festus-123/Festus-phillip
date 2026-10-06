"use client";

import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useGSAP } from "@gsap/react";
import { assets } from "@/assets/asset";

import contacts from "@/data/contact";
import { cardHover, magnetic, stagger, textReveal } from "@/animations";
import Image from "next/image";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const heading = sectionRef.current.querySelector<HTMLElement>(
        "[data-contact-heading]",
      );

      const fields = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-contact-field]",
      );

      const socials = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-contact-social]",
      );

      const sendButton = sectionRef.current.querySelector<HTMLElement>(
        "[data-contact-send]",
      );

      if (heading) {
        textReveal(heading, {
          variant: "line",
        });
      }

      if (fields.length) {
        stagger(fields, {
          variant: "fast",
          opacity: true,
        });
      }

      if (socials.length) {
        socials.forEach((social) => {
          cardHover(social, {
            variant: "subtle",
          });
        });
      }

      if (sendButton) {
        magnetic(sendButton, {
          variant: "subtle",
        });
      }
    },
    {
      scope: sectionRef,
    },
  );

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const toastId = toast.loading("Sending message...");

    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          name: formData.get("name"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error("Message could not be sent");
      }

      toast.success("Message sent successfully", {
        id: toastId,
      });

      form.reset();
    } catch {
      toast.error("Couldn't send your message", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-ink px-6 py-24 text-white md:px-12 md:py-32 lg:px-20"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue opacity-20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-gold opacity-15 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 border-b border-white/15 pb-10 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-6 font-satoshi text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Send Me a dm
            </p>

            <h2
              data-contact-heading
              className="max-w-5xl font-satoshi text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl lg:text-[8rem]"
            >
              Let&apos;s build
              <br />
              <span className="text-brand-gradient">something useful.</span>
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6 md:gap-10">
            {/* image */}
            <div className="rounded-full border-2 border-cream p-4">
              <Image
                src={assets.footer}
                alt="Contact"
                width={500}
                height={500}
                className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40 lg:h-48 lg:w-48 grayscale"
              />
            </div>

            <p className="max-w-xs font-general text-sm leading-6 text-white/60">
              Have a project, idea, or opportunity in mind? Tell me what
              you&apos;re working on and let&apos;s see where it goes.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Contact statement */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[320px] overflow-hidden border-2 border-white/15 bg-white/[0.04] p-7 md:p-10">
              <span className="absolute -right-5 -top-10 font-satoshi text-[12rem] font-bold leading-none text-white/[0.03]">
                ?
              </span>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-gold/50 px-3 py-1 font-satoshi text-xs font-bold uppercase tracking-wider text-blue">
                    Open to opportunities
                  </span>

                  <h3 className="mt-10 max-w-md font-satoshi text-3xl font-bold leading-tight md:text-4xl text-transparent [-webkit-text-stroke:0.5px_#ffffff]">
                    Got an idea that needs to become a real product?
                  </h3>
                </div>

                <p className="mt-12 max-w-md font-general text-sm leading-6 text-white/50">
                  From interfaces and websites to full product experiences,
                  I&apos;m interested in building things that solve actual
                  problems.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7">
            <div className="space-y-8">
              {/* Email */}
              <div
                data-contact-field
                className="border-b border-white/20 pb-4 transition-colors duration-300 focus-within:border-white/80"
              >
                <label
                  htmlFor="contact-email"
                  className="mb-3 block font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-white/50"
                >
                  Your Email *
                </label>

                <input
                  id="contact-email"
                  required
                  type="email"
                  name="email"
                  placeholder="your-email@gmail.com"
                  className="w-full bg-transparent font-general text-lg text-white outline-none placeholder:text-white/25 md:text-xl"
                />
              </div>

              {/* Name */}
              <div
                data-contact-field
                className="border-b border-white/20 pb-4 transition-colors duration-300 focus-within:border-white/80"
              >
                <label
                  htmlFor="contact-name"
                  className="mb-3 block font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-white/50"
                >
                  Your Name *
                </label>

                <input
                  id="contact-name"
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-transparent font-general text-lg text-white outline-none placeholder:text-white/25 md:text-xl"
                />
              </div>

              {/* Message */}
              <div
                data-contact-field
                className="border-b border-white/20 pb-4 transition-colors duration-300 focus-within:border-white/80"
              >
                <label
                  htmlFor="contact-message"
                  className="mb-3 block font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-white/50"
                >
                  Tell me about it *
                </label>

                <textarea
                  id="contact-message"
                  required
                  name="message"
                  placeholder="Build..."
                  className="min-h-32 w-full resize-none bg-transparent font-general text-lg text-white outline-none placeholder:text-white/25 hide-scrollbar md:text-xl"
                />
                {/* Submit */}
                <div className="flex justify-end pt-2">
                  <button
                    data-contact-send
                    disabled={loading}
                    type="submit"
                    className="group flex h-24 w-24 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-50 md:h-28 md:w-28 cursor-pointer"
                  >
                    <span className="flex flex-col items-center gap-1 font-satoshi text-2xl font-bold uppercase tracking-wider">
                      {loading ? (
                        <FiSend className="text-[clamp(1.5rem,2.5vw,4rem)] transition-transform duration-300 translate-x-3 translate-y-3 text-blue cursor-not-allowed" />
                      ) : (
                        <>
                          <FiSend className="text-[clamp(1.5rem,2.5vw,4rem)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 hover:drop-shadow-2xl text-gold hover:text-blue " />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Social / contact strip */}
        <div className="mt-20 border-t border-white/15 pt-8 md:mt-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="font-satoshi text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Find me around the internet
            </p>

            <div className="flex flex-wrap gap-3">
              {contacts.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    data-contact-social
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${item.name ?? "social profile"}`}
                    className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>

            <div className="hidden items-center gap-2 font-satoshi text-xs font-bold uppercase tracking-wider text-white/40 lg:flex">
              Scroll to top
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
