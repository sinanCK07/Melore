"use client";

import { motion } from "framer-motion";
import {
  Car,
  Wrench,
  Sparkles,
  Megaphone,
  Crown,
  Gift,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const USE_CASES = [
  {
    icon: Car,
    title: "New vehicle delivery",
    moment: "The bow comes off. The keys are in their hand. The tin goes home with them.",
    audience: "Showroom CRM teams",
    accent: "#C9A24A",
  },
  {
    icon: Wrench,
    title: "Service thank-you",
    moment: "Their car is washed, polished, ready. A tin on the passenger seat turns a service visit into a story.",
    audience: "Service managers",
    accent: "#8D5B3B",
  },
  {
    icon: Sparkles,
    title: "Festive corporate gifting",
    moment: "Onam, Diwali, Christmas, new year — branded hampers for clients, dealers, and partner teams.",
    audience: "Marketing & HR",
    accent: "#F4B400",
  },
  {
    icon: Megaphone,
    title: "Launch events",
    moment: "A new model, a new branch, a new collaboration. Every guest leaves with the brand in a tin.",
    audience: "Event teams",
    accent: "#D2596A",
  },
  {
    icon: Crown,
    title: "VIP retention",
    moment: "The return customer, the high-spend visitor, the partner you can't afford to lose — a quiet gesture, premium-packaged.",
    audience: "Branch heads",
    accent: "#7CB342",
  },
  {
    icon: Gift,
    title: "Pilot programmes",
    moment: "Weekend trial. One delivery batch. See how customers react on social before scaling — no minimum order on the first run.",
    audience: "First-time partners",
    accent: "#E5C97E",
  },
];

export function UseCasesSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-25 mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 -z-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gold-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400"
          >
            Where Melore lives
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-4xl font-light leading-[1.05] text-ivory-50 md:text-6xl"
          >
            Six premium moments,
            <br />
            <span className="italic text-gold-shimmer">one tin</span> at a time.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ivory-100/65 md:text-lg"
          >
            We design Melore as a customer-experience tool, not a snack. Below
            are the moments dealerships, hotels, and corporate gifting teams use
            it for.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {USE_CASES.map((u) => (
            <motion.article
              key={u.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="group glass relative flex flex-col gap-6 rounded-3xl p-7 md:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: u.accent }}
              />

              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/25 text-gold-300 transition-colors group-hover:text-ink-950"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <u.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-400/85">
                  {u.audience}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-ivory-50">
                  {u.title}
                </h3>
              </div>

              <p className="text-pretty text-[15px] leading-relaxed text-ivory-100/72">
                {u.moment}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
