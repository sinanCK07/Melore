"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FLAVORS, type Flavor } from "@/lib/flavors";
import { ProductPhoto } from "./ProductPhoto";

const COUNT = FLAVORS.length;

export function FlavorScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll progress so transitions don't feel jittery
  const progress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 40,
    mass: 0.25,
  });

  // Background color crossfade — each flavor holds its color across its
  // own quarter of the scroll, transitions happen briefly between them.
  const bg = useTransform(
    progress,
    [0, 0.18, 0.32, 0.43, 0.57, 0.68, 0.82, 1],
    [
      FLAVORS[0].bg, FLAVORS[0].bg,
      FLAVORS[1].bg, FLAVORS[1].bg,
      FLAVORS[2].bg, FLAVORS[2].bg,
      FLAVORS[3].bg, FLAVORS[3].bg,
    ]
  );

  return (
    <section
      id="flavours"
      ref={wrapperRef}
      className="relative"
      style={{ height: `${COUNT * 100}vh` }}
    >
      {/* Sticky stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ backgroundColor: bg }}
          className="absolute inset-0 transition-colors"
        />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-30 mix-blend-multiply" />

        {/* Per-flavor decorative ingredient particles */}
        {FLAVORS.map((flavor, i) => (
          <FlavorParticles
            key={flavor.id}
            flavor={flavor}
            progress={progress}
            index={i}
          />
        ))}

        {/* Tins stacked, only the active one visible */}
        <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-8 px-6 md:px-10 lg:grid-cols-2">
          {/* Copy column */}
          <div className="order-2 lg:order-1">
            {FLAVORS.map((flavor, i) => (
              <FlavorCopy
                key={flavor.id}
                flavor={flavor}
                progress={progress}
                index={i}
              />
            ))}
          </div>

          {/* Tin column */}
          <div className="order-1 flex h-full items-center justify-center lg:order-2">
            <div className="relative perspective-1500">
              {FLAVORS.map((flavor, i) => (
                <FlavorTin
                  key={flavor.id}
                  flavor={flavor}
                  progress={progress}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress rail */}
        <FlavorRail progress={progress} />
      </div>
    </section>
  );
}

/* ---------- Per-flavor pieces ---------- */

function rangeFor(i: number): [number, number, number, number] {
  // Build a window centered on this flavor's slice with tight crossfade edges
  const start = i / COUNT;
  const end = (i + 1) / COUNT;
  const edge = 0.025;
  return [
    Math.max(0, start - edge),
    start + edge,
    end - edge,
    Math.min(1, end + edge),
  ];
}

function FlavorCopy({
  flavor,
  progress,
  index,
}: {
  flavor: Flavor;
  progress: MotionValue<number>;
  index: number;
}) {
  const [a, b, c, d] = rangeFor(index);
  const opacity = useTransform(progress, [a, b, c, d], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, b, c, d], [40, 0, 0, -40]);

  return (
    <motion.div
      style={{ opacity, y, color: flavor.text }}
      className="absolute max-w-xl"
    >
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.32em] opacity-70"
        style={{ color: flavor.text }}
      >
        Flavour 0{index + 1}
      </p>
      <h2
        className="mt-4 font-display text-5xl font-light leading-[1.02] md:text-7xl"
        style={{ color: flavor.text }}
      >
        {flavor.labelLines[0]}
        <br />
        <span className="italic">{flavor.labelLines[1]}</span>
      </h2>
      <p className="mt-6 max-w-md text-lg leading-relaxed opacity-85 md:text-xl">
        {flavor.hero}
      </p>
      <p className="mt-4 max-w-md text-base leading-relaxed opacity-70">
        {flavor.story}
      </p>

      {/* Ingredients */}
      <div className="mt-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] opacity-60">
          Inside the tin
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {flavor.ingredients.map((ing) => (
            <li
              key={ing}
              className="rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide"
              style={{
                borderColor: `${flavor.text}33`,
                color: flavor.text,
                background: `${flavor.accent}66`,
              }}
            >
              {ing}
            </li>
          ))}
        </ul>
      </div>

      {/* Nutrition + CTA */}
      <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
        <Nutrition label="Calories" value={flavor.nutrition.calories} color={flavor.text} />
        <Nutrition label="Protein" value={flavor.nutrition.protein} color={flavor.text} />
        <Nutrition label="Fat" value={flavor.nutrition.fat} color={flavor.text} />
      </div>

      <a
        href="#cta"
        className="group mt-10 inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition"
        style={{
          background: flavor.text,
          color: flavor.bg,
        }}
      >
        Add to Box
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          strokeWidth={2.2}
        />
      </a>
    </motion.div>
  );
}

function Nutrition({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div>
      <p className="font-display text-2xl font-medium" style={{ color }}>
        {value}
      </p>
      <p
        className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] opacity-60"
        style={{ color }}
      >
        {label}
      </p>
    </div>
  );
}

function FlavorTin({
  flavor,
  progress,
  index,
}: {
  flavor: Flavor;
  progress: MotionValue<number>;
  index: number;
}) {
  const [a, b, c, d] = rangeFor(index);
  const opacity = useTransform(progress, [a, b, c, d], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, b, c, d], [80, 0, 0, -80]);
  const rotateY = useTransform(progress, [a, b, c, d], [-40, 0, 0, 40]);
  const scale = useTransform(progress, [a, b, c, d], [0.85, 1, 1, 0.85]);

  return (
    <motion.div
      style={{ opacity, y, rotateY, scale }}
      className="preserve-3d absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="preserve-3d"
      >
        <ProductPhoto
          flavor={flavor}
          sizes="(max-width: 1024px) 80vw, 520px"
          className="h-[70vh] max-h-[600px] w-[clamp(280px,50vw,520px)]"
        />
      </motion.div>
    </motion.div>
  );
}

function FlavorRail({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex">
      {FLAVORS.map((flavor, i) => (
        <RailItem key={flavor.id} flavor={flavor} index={i} progress={progress} />
      ))}
    </div>
  );
}

function RailItem({
  flavor,
  index,
  progress,
}: {
  flavor: Flavor;
  index: number;
  progress: MotionValue<number>;
}) {
  const [a, b, c, d] = rangeFor(index);
  const opacity = useTransform(progress, [a, b, c, d], [0.35, 1, 1, 0.35]);
  const width = useTransform(progress, [a, b, c, d], [16, 40, 40, 16]);
  return (
    <motion.div style={{ opacity }} className="flex items-center gap-3">
      <span
        className="text-[10px] font-semibold uppercase tracking-[0.32em]"
        style={{ color: flavor.text }}
      >
        {flavor.labelLines[0]}
      </span>
      <motion.span
        style={{ width, background: flavor.text }}
        className="block h-px"
      />
    </motion.div>
  );
}

/* ---------- Per-flavor particle layer ---------- */

function FlavorParticles({
  flavor,
  progress,
  index,
}: {
  flavor: Flavor;
  progress: MotionValue<number>;
  index: number;
}) {
  const [a, b, c, d] = rangeFor(index);
  const opacity = useTransform(progress, [a, b, c, d], [0, 0.7, 0.7, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {Array.from({ length: 10 }).map((_, i) => {
        const seed = (index + 1) * (i + 1) * 1733;
        const left = (seed * 1.31) % 100;
        const top = (seed * 2.71) % 100;
        const size = 56 + ((seed * 0.29) % 56); // 56–112px, clearly readable
        const dur = 7 + ((seed * 0.31) % 6);
        const delay = (seed * 0.07) % 4;
        const rot = (seed * 0.93) % 360;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              y: [0, -30, 0],
              rotate: [rot, rot + 25, rot],
              opacity: [0.5, 0.95, 0.5],
            }}
            transition={{
              duration: dur,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            className="absolute"
          >
            <FlavorShape flavor={flavor} index={i} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function FlavorShape({ flavor, index }: { flavor: Flavor; index: number }) {
  const ingredients: Record<string, string[]> = {
    butter: ["/ingredients-webp/butter.webp"],
    saffron: [
      "/ingredients-webp/almond.webp",
      "/ingredients-webp/pista.webp",
      "/ingredients-webp/saffron.webp",
    ],
    cocoa: ["/ingredients-webp/chocolate-chip.webp"],
    coconut: ["/ingredients-webp/coconut.webp"],
  };

  const options = ingredients[flavor.id] || [];
  if (options.length === 0) return null;
  const src = options[index % options.length];

  return (
    <div className="h-full w-full relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-full w-full object-contain drop-shadow-lg"
      />
    </div>
  );
}
