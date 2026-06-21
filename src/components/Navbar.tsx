"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { MeloreWordmark } from "./MeloreWordmark";

const NAV_LINKS = [
  { label: "Flavours", href: "#flavours" },
  { label: "Co-Branding", href: "#cobrand" },
  { label: "How It Works", href: "#story" },
  { label: "Packaging", href: "#packaging" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark py-2.5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#" aria-label="Melore — home">
          <MeloreWordmark className="h-9 w-auto" tone="gold" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium tracking-wide text-ivory-100/80 transition-colors hover:text-gold-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#sample"
            className="group hidden items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2.5 text-sm font-medium text-gold-300 backdrop-blur transition hover:border-gold-400 hover:bg-gold-500/20 hover:text-gold-300 md:inline-flex"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            Request Sample
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-100 transition hover:border-gold-400/60 hover:text-gold-300 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden"
        >
          <div className="mx-6 mt-3 rounded-2xl glass-dark p-5">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-ivory-100/85 transition hover:bg-gold-500/10 hover:text-gold-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#sample"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-medium text-ink-950"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={2} />
                Request Sample
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
