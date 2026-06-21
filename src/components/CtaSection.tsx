"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";

const PHONE = "918089215802";
const WA_SAMPLE = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi Melore, we'd like to request a co-branded sample box."
)}`;
const WA_TASTING = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi Melore, we'd like to book a tasting / discovery call."
)}`;

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-ink" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-30 mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[160px]"
      />

      <FallingCookies />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400"
        >
          Start the pilot
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-6 font-display text-5xl font-light leading-[1.02] text-ivory-50 md:text-7xl lg:text-8xl"
        >
          Send the first <span className="italic text-gold-shimmer">tin</span>
          <br />
          to your CRM lead.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-ivory-100/65 md:text-xl"
        >
          We courier a tasting box with a co-branded mockup, the four flavours,
          and a one-page proposal — at no cost for qualified partners.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href={WA_SAMPLE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-sheen px-9 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-ink-950 shadow-glow transition hover:shadow-glow-lg"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
            Request a Sample Box
          </a>
          <a
            href={WA_TASTING}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/40 px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-gold-300 transition hover:border-gold-300 hover:bg-gold-500/10"
          >
            Book a Tasting
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10"
        >
          <a
            href="mailto:info@freshlers.com"
            className="group inline-flex items-center gap-2 text-sm text-ivory-100/60 transition hover:text-gold-300"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            info@freshlers.com
          </a>
          <a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-ivory-100/60 transition hover:text-gold-300"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            +91 80892 15802 · WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FallingCookies() {
  const cookies = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => {
      const seed = i * 9301 + 49297;
      const left = (seed * 1.31) % 100;
      const size = 12 + ((seed * 0.41) % 24);
      const dur = 12 + ((seed * 0.27) % 18);
      const delay = (seed * 0.13) % 8;
      const rotate = (seed * 0.91) % 360;
      const opacity = 0.18 + ((seed * 0.013) % 0.32);
      return { left, size, dur, delay, rotate, opacity };
    });
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {cookies.map((c, i) => (
        <motion.div
          key={i}
          initial={{ y: "-10vh", rotate: c.rotate, opacity: 0 }}
          animate={{
            y: "110vh",
            rotate: c.rotate + 240,
            opacity: [0, c.opacity, c.opacity, 0],
          }}
          transition={{
            duration: c.dur,
            delay: c.delay,
            repeat: Infinity,
            ease: "linear",
            opacity: { duration: c.dur, times: [0, 0.1, 0.85, 1] },
          }}
          style={{
            left: `${c.left}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
          }}
          className="absolute"
        >
          <FallingCookieSvg />
        </motion.div>
      ))}
    </div>
  );
}

function FallingCookieSvg() {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full">
      <defs>
        <radialGradient id="fc-c" cx="0.4" cy="0.4">
          <stop offset="0%" stopColor="#E5C97E" />
          <stop offset="100%" stopColor="#A8842F" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#fc-c)" />
      <circle cx="11" cy="12" r="2" fill="#3A2417" />
      <circle cx="19" cy="14" r="1.6" fill="#3A2417" />
      <circle cx="20" cy="20" r="2.2" fill="#3A2417" />
      <circle cx="12" cy="20" r="1.4" fill="#3A2417" />
    </svg>
  );
}
