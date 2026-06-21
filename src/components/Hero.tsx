"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GoldParticles } from "./GoldParticles";
import { ProductPhoto } from "./ProductPhoto";
import { FLAVORS } from "@/lib/flavors";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const tin = FLAVORS[2]; // chocolate chip for the dark hero

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-radial-ink pt-28 pb-16 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-[60vh] w-[100vw] -translate-x-1/2 rounded-full bg-cocoa-bg/30 blur-[140px]"
      />

      <GoldParticles count={42} />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr_1fr]">
        {/* Left copy */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold-300/80"
          >
            Co-branded gifting partner · Kerala
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="mt-5 font-display text-[44px] font-light leading-[1.02] tracking-tight text-ivory-50 md:text-6xl lg:text-[68px]"
          >
            Crafted for{" "}
            <span className="italic text-gold-shimmer">moments</span>
            <br />
            that matter.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
            className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ivory-100/70 md:text-lg"
          >
            Premium co-branded cookie tins for car delivery rituals, festive
            corporate gifting, and the kind of customer moment your buyers post
            to Instagram.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.75 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#sample"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-sheen px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink-950 shadow-glow transition hover:shadow-glow-lg"
            >
              Request a Sample Box
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.2}
              />
            </a>
            <a
              href="#sample"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/40 px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-gold-300 transition hover:border-gold-300 hover:bg-gold-500/10"
            >
              Book a Tasting
            </a>
          </motion.div>
        </div>

        {/* Center tin */}
        <div className="order-1 flex items-center justify-center lg:order-2">
          <FloatingTin>
            <ProductPhoto
              flavor={tin}
              priority
              sizes="(max-width: 1024px) 80vw, 520px"
              className="h-[60vh] max-h-[640px] w-[clamp(280px,55vw,520px)]"
            />
          </FloatingTin>
        </div>

        {/* Right meta */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
          className="order-3 hidden flex-col gap-7 lg:flex"
        >
          <Stat label="Premium flavours" value="04" />
          <Stat label="Hour-by-hour bake control" value="72" />
          <Stat label="Co-brand options per tin" value="∞" />
          <div className="mt-2 h-px w-16 bg-gold-500/40" />
          <p className="max-w-xs text-sm leading-relaxed text-ivory-100/55">
            Built for showrooms, hospitality, and corporate gifting teams. Pilot
            batches welcome. Festive runs at scale.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-ivory-100/45">
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="mt-2 flex justify-center"
        >
          <ChevronDown className="h-4 w-4 text-gold-400/70" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingTin({ children }: { children: React.ReactNode }) {
  return (
    <div className="perspective-1500">
      <motion.div
        initial={{ opacity: 0, y: 30, rotateY: -20 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
        className="preserve-3d relative"
      >
        <motion.div
          animate={{ rotateY: [0, 8, 0, -8, 0], y: [0, -12, 0, -8, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="preserve-3d"
        >
          {children}
        </motion.div>
        {/* gold halo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-gold-500/20 blur-3xl"
        />
      </motion.div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-4xl font-light text-gold-shimmer md:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.24em] text-ivory-100/55">
        {label}
      </p>
    </div>
  );
}
