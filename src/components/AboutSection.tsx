"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    n: "01",
    title: "Share your brand",
    body: "Send us your logo, brand colours, and the moment you want the box to live in — delivery, festive, service, launch. A single email is enough.",
  },
  {
    n: "02",
    title: "We mock it up",
    body: "Within 48 hours you receive a co-branded tin mockup, insert card design, and a sample flavour mix matched to your audience.",
  },
  {
    n: "03",
    title: "Approve and pilot bake",
    body: "We bake a small pilot run — typically 50–200 tins for a first batch. No long-term commitment. We dispatch from our Kerala kitchen to your address.",
  },
  {
    n: "04",
    title: "Hand it to your customer",
    body: "The tin goes home with the new car / the festive client / the launch guest. The packaging does the talking; the cookie earns the next order.",
  },
  {
    n: "05",
    title: "Watch the reaction",
    body: "Customer Instagram posts. Review-page QR scans. Word-of-mouth at the showroom floor. We then scale to your festive or recurring schedule.",
  },
];

export function AboutSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.7", "end 0.4"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="story"
      className="relative bg-ivory-100 py-28 text-ink-900 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-20 mix-blend-multiply"
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          {/* Left intro */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-600"
            >
              How it works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-4xl font-light leading-[1.05] text-ink-900 md:text-6xl"
            >
              From your brief to your customer&apos;s hand —{" "}
              <span className="italic">in days, not weeks</span>.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ink-700 md:text-lg"
            >
              We&apos;ve built Melore for partners who need a customer-experience
              gift that&apos;s easy to brief, fast to mock up, and elegant when it
              arrives. The first pilot is always small.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-600"
            >
              <span className="h-px w-8 bg-gold-500" />
              Baked in Kerala by Freshler&apos;s Foods
            </motion.div>
          </motion.div>

          {/* Right timeline */}
          <div ref={timelineRef} className="relative">
            {/* Vertical rail — sits in the gutter column of the grid below */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-[11px] top-3 bottom-3 w-px bg-gold-500/20"
            >
              <motion.div
                style={{ scaleY: pathLength, transformOrigin: "top" }}
                className="h-full w-full bg-gold-500"
              />
            </div>

            <motion.ol
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={stagger}
              className="relative space-y-14 md:space-y-16"
            >
              {STEPS.map((s, i) => (
                <StepItem
                  key={s.n}
                  step={s}
                  index={i}
                  progress={pathLength}
                />
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
  progress,
}: {
  step: (typeof STEPS)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const threshold = (index + 0.5) / STEPS.length;
  const fillScale = useTransform(
    progress,
    [threshold - 0.08, threshold],
    [0.6, 1]
  );
  const fillOpacity = useTransform(
    progress,
    [threshold - 0.08, threshold],
    [0.35, 1]
  );
  const haloOpacity = useTransform(
    progress,
    [threshold - 0.08, threshold, threshold + 0.04],
    [0, 1, 0.55]
  );
  const haloScale = useTransform(
    progress,
    [threshold - 0.08, threshold + 0.04],
    [0.6, 1.6]
  );

  return (
    <motion.li
      variants={fadeUp}
      className="relative grid grid-cols-[24px_1fr] items-start gap-6 md:gap-8"
    >
      {/* Bullet — centred over the rail (rail is at left-[11px], width 1px → center 11.5px;
          col is 24px wide → bullet inside col placed with ml-[3px] so 12px center lands on rail) */}
      <span className="relative mt-2 block h-3.5 w-3.5">
        <motion.span
          aria-hidden
          style={{ opacity: haloOpacity, scale: haloScale }}
          className="absolute inset-0 -m-2 rounded-full bg-gold-500/30"
        />
        <motion.span
          aria-hidden
          style={{ scale: fillScale, opacity: fillOpacity }}
          className="absolute inset-0 rounded-full bg-gold-500 ring-[3px] ring-ivory-100"
        />
      </span>

      {/* Content */}
      <div className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-600">
          Step {step.n}
        </span>
        <h3 className="mt-3 font-display text-2xl font-medium leading-[1.15] text-ink-900 md:text-3xl">
          {step.title}
        </h3>
        <p className="mt-3 max-w-lg text-pretty text-[15px] leading-relaxed text-ink-700 md:text-base">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}
