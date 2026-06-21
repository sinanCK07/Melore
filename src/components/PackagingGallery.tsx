"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FLAVORS } from "@/lib/flavors";
import { ProductPhoto } from "./ProductPhoto";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function PackagingGallery() {
  const [active, setActive] = useState(0);
  const flavor = FLAVORS[active];

  // Mouse-driven 3D tilt on the hero tin
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), {
    stiffness: 80,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), {
    stiffness: 80,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="packaging"
      className="relative overflow-hidden bg-ink-900 py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-25 mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] transition-colors duration-700"
        style={{ background: `${flavor.bg}33` }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400">
            The Packaging
          </p>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] text-ivory-50 md:text-6xl">
            A tin you will <span className="italic text-gold-shimmer">refuse to throw away</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ivory-100/65 md:text-lg">
            Matte-finished steel, 23-karat gold leaf wordmark, screen-printed
            filigree. Drag the tin to spin it.
          </p>
        </motion.div>

        {/* 3D mouse-rotated tin */}
        <div
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative mt-16 flex h-[60vh] min-h-[420px] items-center justify-center perspective-1500"
        >
          <motion.div
            style={{ rotateY, rotateX }}
            transition={{ type: "spring", stiffness: 80 }}
            className="preserve-3d relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="preserve-3d"
            >
              <ProductPhoto
                flavor={flavor}
                sizes="(max-width: 1024px) 80vw, 560px"
                className="h-[55vh] max-h-[560px] w-[clamp(280px,55vw,560px)]"
              />
            </motion.div>
            {/* reflection */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 left-1/2 h-20 w-2/3 -translate-x-1/2 rounded-[50%] bg-black/40 blur-2xl"
            />
          </motion.div>
        </div>

        {/* Flavor selector */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {FLAVORS.map((f, i) => {
            const isActive = i === active;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(i)}
                className={`group relative inline-flex items-center gap-3 rounded-full border px-5 py-3 transition-all ${
                  isActive
                    ? "border-gold-400 bg-gold-500/15"
                    : "border-ivory-100/15 hover:border-gold-400/50"
                }`}
              >
                <span
                  className="block h-3 w-3 rounded-full transition-transform group-hover:scale-110"
                  style={{ background: f.bg }}
                />
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
                    isActive ? "text-gold-300" : "text-ivory-100/65"
                  }`}
                >
                  {f.labelLines[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
