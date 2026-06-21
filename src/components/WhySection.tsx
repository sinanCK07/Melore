"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  Flame,
  Sparkles,
  Package,
  HandHeart,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const PILLARS = [
  {
    icon: Leaf,
    title: "Premium Ingredients",
    body: "Single-origin where it counts — Kashmiri saffron, Sicilian pistachios, Mamra almonds, single-origin cacao. Never substituted for cost.",
  },
  {
    icon: ShieldCheck,
    title: "Trans-Fat Free",
    body: "No hydrogenated oils, no synthetic shortenings. Every tin carries the trans-fat-free mark printed on the back.",
  },
  {
    icon: Flame,
    title: "Fresh-Batch Baking",
    body: "We bake to your dispatch window, not to a warehouse forecast. Each pilot is rolled within days of leaving the kitchen.",
  },
  {
    icon: Sparkles,
    title: "Recipes Built for Indulgence",
    body: "Slow rest, browned butters, hand-fold inclusions. Designed to taste premium on the first bite and the last.",
  },
  {
    icon: Package,
    title: "Premium Tin Packaging",
    body: "Matte-finished black tin, printed gold filigree, foil-stamped wordmark. Sleeve and insert card co-branded to your dealership.",
  },
  {
    icon: HandHeart,
    title: "Built for Gifting",
    body: "Designed end-to-end as a B2B customer-experience product. Pilots welcomed. Festive scale handled. Long-term partnerships preferred.",
  },
];

export function WhySection() {
  return (
    <section className="relative bg-ink-950 py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-25 mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400"
            >
              Why Melore
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-4xl font-light leading-[1.05] text-ivory-50 md:text-6xl"
            >
              Six things that turn a giveaway into a <span className="italic text-gold-shimmer">gesture</span>.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-pretty text-base leading-relaxed text-ivory-100/65 md:text-lg"
          >
            Bouquets wilt. Key covers stay in the glovebox. A premium tin sits
            on the kitchen counter, gets opened with the family, and earns the
            kind of photo that lands on your customer&apos;s feed.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PILLARS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-ivory-100/10 bg-ink-900/50 p-7 transition-colors hover:border-gold-400/40"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start gap-5">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-300 transition group-hover:border-gold-400 group-hover:bg-gold-500/20">
                  <p.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-ivory-50 md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ivory-100/70">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
