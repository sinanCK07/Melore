"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { MeloreWordmark } from "./MeloreWordmark";
import { fadeUp, viewportOnce } from "@/lib/motion";

const COLUMNS = [
  {
    heading: "Cookies",
    links: [
      { label: "Butter Cookie", href: "#flavours" },
      { label: "Kesar Badam Pista", href: "#flavours" },
      { label: "Chocolate Chip", href: "#flavours" },
      { label: "Crunchy Coconut", href: "#flavours" },
      { label: "The Quartet Sampler", href: "#cobrand" },
    ],
  },
  {
    heading: "For Business",
    links: [
      { label: "Co-Branded Gifting", href: "#cobrand" },
      { label: "Pilot Programmes", href: "#cobrand" },
      { label: "Use Cases", href: "#story" },
      { label: "Packaging", href: "#packaging" },
      { label: "Request a Sample", href: "#sample" },
    ],
  },
  {
    heading: "Maison",
    links: [
      { label: "How It Works", href: "#story" },
      { label: "Why Melore", href: "#cta" },
      { label: "Ingredients", href: "#ingredients" },
      { label: "About Freshler's Foods", href: "#story" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "WhatsApp", href: "https://wa.me/918089215802", icon: WhatsappIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-24 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-20 mix-blend-overlay"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Newsletter */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="grid gap-10 border-b border-gold-500/20 pb-16 md:grid-cols-2 md:gap-16 md:pb-20"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400">
              The Trade Brief
            </p>
            <h3 className="mt-4 font-display text-3xl font-light leading-tight text-ivory-50 md:text-5xl">
              Quarterly notes for <span className="italic text-gold-shimmer">gifting decision-makers</span>.
            </h3>
            <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-ivory-100/65">
              Festive timelines, co-brand case studies, packaging concepts. One
              short email a quarter for CRM, marketing, and gifting leads.
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col justify-center">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@dealership.in"
                aria-label="Email address"
                className="flex-1 rounded-full border border-gold-500/25 bg-ink-900/70 px-6 py-4 text-base text-ivory-50 placeholder:text-ivory-100/40 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-sheen px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink-950 transition hover:shadow-glow"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
              </button>
            </div>
            {subscribed && (
              <p className="mt-3 text-sm text-gold-300">
                You&apos;re on the list. The next Trade Brief lands at the start of the quarter.
              </p>
            )}
          </form>
        </motion.div>

        {/* Brand + columns */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <MeloreWordmark className="h-9 w-auto" tone="gold" />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-ivory-100/65">
              Melore Premium Cookies — a brand of Freshler&apos;s Foods, Kerala.
              Co-branded customer-experience gifting for showrooms, hospitality,
              and corporate clients.
            </p>

            <div className="mt-7 space-y-3 text-sm text-ivory-100/70">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400/80" strokeWidth={1.5} />
                <span>
                  257/C Orthukunnu, Kottukal,<br />
                  Malayam P.O., Kerala — 676528
                </span>
              </p>
              <a href="mailto:info@freshlers.com" className="flex items-center gap-3 transition hover:text-gold-300">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold-400/80" strokeWidth={1.5} />
                info@freshlers.com
              </a>
              <a href="tel:+918089215802" className="flex items-center gap-3 transition hover:text-gold-300">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold-400/80" strokeWidth={1.5} />
                +91 80892 15802
              </a>
            </div>

            <div className="mt-7 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/20 text-gold-300/80 transition hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400">
                  {col.heading}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ivory-100/80 transition-colors hover:text-gold-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-gold-500/15 py-8 text-xs text-ivory-100/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Freshler&apos;s Foods. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-300">Privacy</a>
            <a href="#" className="hover:text-gold-300">Terms</a>
            <a href="#" className="hover:text-gold-300">Allergens</a>
            <a href="#" className="hover:text-gold-300">FSSAI</a>
          </div>
        </div>
      </div>

      {/* Giant ghost wordmark */}
      <div
        aria-hidden
        className="pointer-events-none mt-8 select-none overflow-hidden text-center"
      >
        <p className="font-display text-[20vw] font-light leading-none italic text-gold-shimmer opacity-[0.08]">
          Melore
        </p>
      </div>
    </footer>
  );
}

/* --- inline brand icons --- */

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2zm0 18.15h-.01c-1.5 0-2.98-.41-4.27-1.17l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.27-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.18-.47-.31z" />
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V10.34H5.67V18h2.67zM7 9.27c.86 0 1.55-.7 1.55-1.55a1.56 1.56 0 0 0-3.11 0c0 .86.7 1.55 1.55 1.55zM18.34 18v-4.2c0-2.32-1.25-3.4-2.92-3.4-1.34 0-1.95.74-2.29 1.27V10.34h-2.66c.04.78 0 7.66 0 7.66h2.66v-4.28c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8V18h2.42z" />
    </svg>
  );
}
