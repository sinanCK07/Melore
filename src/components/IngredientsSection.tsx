"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Ingredient = {
  name: string;
  origin: string;
  note: string;
  icon: React.ReactNode;
  glow: string;
  photo: string;
  /** Where to anchor the backdrop photo */
  focal: string;
};

const INGREDIENTS: Ingredient[] = [
  {
    name: "Cultured Butter",
    origin: "Normandy, France",
    note: "Slow-churned to a 84% fat content. The structural backbone of every Melore.",
    glow: "#FFD978",
    photo: "/products/butter.png",
    focal: "center 35%",
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9">
        <rect x="10" y="20" width="44" height="32" rx="3" fill="#F6D57A" />
        <rect x="10" y="20" width="44" height="6" fill="#FFF1C1" opacity="0.6" />
        <rect x="14" y="28" width="36" height="2" fill="#8A6A20" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Kashmiri Saffron",
    origin: "Pampore Valley, India",
    note: "150,000 stigmas hand-picked for a single kilo. We use Mongra grade only.",
    glow: "#E25822",
    photo: "/products/saffron.png",
    focal: "center 38%",
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9">
        <path d="M10 50 Q22 24 32 38 Q42 22 54 50" stroke="#E25822" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M16 48 Q26 30 32 42 Q40 28 48 48" stroke="#FF7A40" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "Mamra Almonds",
    origin: "Iran",
    note: "The rarest almond on earth. Less than 4% of global almond crop. Naturally sweet.",
    glow: "#E5C97E",
    photo: "/products/saffron.png",
    focal: "70% 70%",
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9">
        <path d="M32 8 C 48 18 48 46 32 58 C 16 46 16 18 32 8 Z" fill="#E6B36A" stroke="#7C611F" strokeWidth="1.2" />
        <path d="M32 8 L32 58" stroke="#7C611F" strokeWidth="0.6" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Sicilian Pistachios",
    origin: "Bronte, Italy",
    note: "Volcanic-soil grown on Mount Etna. Vivid emerald, naturally sweet, deeply aromatic.",
    glow: "#7CB342",
    photo: "/products/saffron.png",
    focal: "85% 80%",
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9">
        <ellipse cx="32" cy="32" rx="16" ry="22" fill="#7CB342" />
        <path d="M32 12 Q38 32 32 52" stroke="#3A6020" strokeWidth="1.5" fill="none" />
        <ellipse cx="26" cy="22" rx="4" ry="2" fill="#A8C975" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Single-Origin Cacao",
    origin: "Esmeraldas, Ecuador",
    note: "70% dark, melted and re-tempered in our kitchen. Pools, not specks.",
    glow: "#8D5B3B",
    photo: "/products/cocoa.png",
    focal: "center 40%",
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9">
        <path d="M10 50 L32 12 L54 50 Z" fill="#3B2417" />
        <path d="M10 50 L32 12" stroke="#5A3A22" strokeWidth="1" opacity="0.6" />
        <ellipse cx="38" cy="42" rx="4" ry="2" fill="#8D5B3B" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Coast Coconut",
    origin: "Kerala, India",
    note: "Slow-toasted over banana wood until it caramelises. Tropical, never tropical-sweet.",
    glow: "#F0D38A",
    photo: "/products/coconut.png",
    focal: "center 40%",
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9">
        <circle cx="32" cy="32" r="22" fill="#7A5A28" />
        <circle cx="32" cy="32" r="17" fill="#F5E6CC" />
        <circle cx="26" cy="28" r="2" fill="#7A5A28" />
        <circle cx="38" cy="30" r="1.5" fill="#7A5A28" />
        <circle cx="32" cy="38" r="1.5" fill="#7A5A28" />
      </svg>
    ),
  },
];

export function IngredientsSection() {
  return (
    <section id="ingredients" className="relative bg-ink-950 py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-25 mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]"
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
            The Ingredients
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-4xl font-light leading-tight text-ivory-50 md:text-6xl"
          >
            Sourced like <span className="italic text-gold-shimmer">jewellery</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ivory-100/65 md:text-lg"
          >
            We travel further than we have to. Each ingredient is single-origin,
            traceable to a grower, and arrives in the kitchen within two weeks
            of harvest.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INGREDIENTS.map((ing) => (
            <motion.article
              key={ing.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl border border-ivory-100/10 bg-ink-900 transition-colors duration-300 hover:border-gold-400/40"
              style={{
                boxShadow: `0 30px 60px -30px rgba(0,0,0,0.55)`,
              }}
            >
              {/* Backdrop product photo */}
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src={ing.photo}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 360px"
                  className="object-cover opacity-55 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
                  style={{ objectPosition: ing.focal }}
                />
              </div>

              {/* Vignette + bottom gradient for legibility */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,6,10,0.96) 0%, rgba(6,6,10,0.78) 35%, rgba(6,6,10,0.18) 65%, rgba(6,6,10,0.10) 100%)",
                }}
              />
              {/* Top soft shade — keeps photo readable without crushing it */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-950/60 to-transparent"
              />

              {/* Coloured glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
                style={{ background: ing.glow }}
              />

              {/* Origin pill — top right */}
              <div className="relative z-10 flex justify-end p-5">
                <span className="rounded-full bg-ink-900/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300 backdrop-blur-sm ring-1 ring-gold-500/20">
                  {ing.origin}
                </span>
              </div>

              {/* Spacer pushes content to bottom */}
              <div className="flex-1" />

              {/* Bottom content */}
              <div className="relative z-10 flex flex-col gap-4 p-6 pt-2 md:p-7 md:pt-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/30 bg-ink-900/80 backdrop-blur-sm">
                  {ing.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium leading-tight text-ivory-50 md:text-[26px]">
                    {ing.name}
                  </h3>
                  <p className="mt-3 text-pretty text-[14px] leading-relaxed text-ivory-100/75">
                    {ing.note}
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
