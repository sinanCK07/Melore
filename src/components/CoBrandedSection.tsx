"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, QrCode, MessageCircle } from "lucide-react";
import { FLAVORS } from "@/lib/flavors";
import { ProductPhoto, ProductGroupPhoto } from "./ProductPhoto";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const CUSTOMIZATIONS = [
  "Your brand printed on the tin sleeve",
  "Hand-finished insert card with a custom message",
  "QR code linking to your review or feedback page",
  "Tin colourway matched to your brand palette (festive runs)",
  "2-cookie, 4-cookie, or rigid mini-hamper formats",
];

const PLACEHOLDER_HINTS = [
  "Nippon Toyota",
  "EVM Volkswagen",
  "Popular Hyundai",
  "Mercedes-Benz Silver Star",
];

const PHONE = "918089215802";

function waUrl(brand: string, kind: "sample" | "tasting") {
  const safeBrand = brand.trim() || "our dealership";
  const msg =
    kind === "sample"
      ? `Hi Melore, this is ${safeBrand}. We'd like to request a co-branded sample box.`
      : `Hi Melore, this is ${safeBrand}. We'd like to book a tasting / discovery call.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export function CoBrandedSection() {
  const [brand, setBrand] = useState("");
  const placeholder = useMemo(
    () =>
      `e.g. ${
        PLACEHOLDER_HINTS[
          Math.floor((Date.now() / 60000) % PLACEHOLDER_HINTS.length)
        ]
      }`,
    []
  );
  const tin = FLAVORS[2]; // chocolate chip — reads luxe on dark
  const displayBrand = brand.trim() || "Your Brand";

  return (
    <section id="cobrand" className="relative bg-ink-950 py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-25 mix-blend-overlay"
      />
      {/* Symmetric ambient halo — soft golden shade behind the product */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.07] blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
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
            Co-branded gifting
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-4xl font-light leading-[1.05] text-ivory-50 md:text-6xl"
          >
            Your brand on the tin.
            <br />
            <span className="italic text-gold-shimmer">
              Their delivery, unforgettable.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ivory-100/70 md:text-lg"
          >
            We co-brand every element — tin sleeve, insert card, QR — so the
            box you hand a customer feels like an extension of your showroom,
            not a third-party freebie.
          </motion.p>
        </motion.div>

        {/* Mockup stage */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-16 grid items-center gap-14 lg:mt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20"
        >
          {/* Annotated tin */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]">
              <ProductPhoto
                flavor={tin}
                sizes="(max-width: 1024px) 80vw, 480px"
                className="h-full w-full"
              />

              {/* Gold-foil partner brand — sits on the tin's printed label area,
                  directly above the MELORE wordmark. The photo has cookies on
                  the right, so the tin's optical centre is left of bounding-box
                  centre — hence left-[42%]. */}
              <motion.div
                key={displayBrand}
                initial={{ opacity: 0, y: -3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute left-[35%] top-[33%] -translate-x-1/2 text-center"
                style={{ maxWidth: "40%" }}
              >
                <span className="block text-[7px] font-semibold uppercase tracking-[0.36em] text-gold-shimmer md:text-[8px]">
                  In partnership with
                </span>
                <span className="mt-0.5 block whitespace-nowrap font-display text-[13px] font-medium italic leading-tight text-gold-shimmer md:text-sm">
                  {displayBrand}
                </span>
                <span
                  aria-hidden
                  className="mx-auto mt-1 block h-px w-7 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right column: brand input + insert card + customizations + CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-8 lg:gap-10"
          >
            {/* Brand name input */}
            <div className="space-y-3">
              <label
                htmlFor="brand-input"
                className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-400"
              >
                Type your brand
              </label>
              <div className="group relative">
                <input
                  id="brand-input"
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value.slice(0, 40))}
                  placeholder={placeholder}
                  maxLength={40}
                  className="w-full rounded-2xl border border-gold-500/30 bg-ink-900/70 px-5 py-4 font-display text-lg font-medium tracking-tight text-ivory-50 placeholder:text-ivory-100/35 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400/40 md:text-xl"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold-400/0 transition group-focus-within:ring-gold-400/40"
                />
              </div>
              <p className="text-xs text-ivory-100/45">
                Live preview on the tin to the left. Up to 40 characters.
              </p>
            </div>

            <InsertCardPreview brand={displayBrand} />

            <ul className="grid gap-3">
              {CUSTOMIZATIONS.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-ivory-100/80"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-300">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <div
              id="sample"
              className="rounded-2xl border border-gold-500/30 bg-ink-900/60 p-6 md:p-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-400">
                Start a pilot
              </p>
              <h3 className="mt-3 font-display text-2xl font-light leading-tight text-ivory-50 md:text-3xl">
                Send a sample tin to your CRM lead.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ivory-100/65">
                We courier a tasting box with a co-branded mockup printed for
                your dealership. No commitment, no minimums for the first run.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waUrl(brand, "sample")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-sheen px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-ink-950 transition hover:shadow-glow"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                  Request a Sample Box
                </a>
                <a
                  href={waUrl(brand, "tasting")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/40 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-gold-300 transition hover:border-gold-300 hover:bg-gold-500/10"
                >
                  Book a Tasting
                </a>
              </div>
              <p className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ivory-100/45">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                WhatsApp · +91 80892 15802
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Group shot ribbon */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-28 grid items-center gap-12 border-t border-gold-500/20 pt-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-400">
              The Collection
            </p>
            <h3 className="mt-5 font-display text-3xl font-light leading-tight text-ivory-50 md:text-5xl">
              Four flavours.
              <br />
              <span className="italic text-gold-shimmer">
                One co-branded shelf.
              </span>
            </h3>
            <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-ivory-100/65">
              Mix the four SKUs into a sampler, a delivery-day single tin, or a
              festive hamper. We bake to your dispatch schedule.
            </p>
          </div>
          <ProductGroupPhoto
            sizes="(max-width: 1024px) 90vw, 600px"
            className="aspect-[3/2] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

function InsertCardPreview({ brand }: { brand: string }) {
  return (
    <div className="relative rounded-2xl border border-gold-500/25 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-7 shadow-soft md:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-grain opacity-20 mix-blend-overlay"
      />
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-400/85">
        Insert card · preview
      </p>
      <p className="mt-5 font-display text-xl font-light italic leading-snug text-ivory-50 md:text-2xl">
        Welcome to the{" "}
        <span className="not-italic font-medium text-gold-shimmer">
          {brand}
        </span>{" "}
        family.
      </p>
      <p className="mt-4 text-[13px] leading-relaxed text-ivory-100/65">
        Hand-rolled at Freshler&apos;s Foods · Kerala. Best enjoyed within four
        days of opening — though they rarely make it that far.
      </p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-gold-500/20 pt-5">
        <div>
          <p className="font-display text-base italic text-gold-shimmer">
            Melore
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory-100/40">
            Premium Cookies
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory-100/45 sm:block">
            Share your moment
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gold-500/30 text-gold-300">
            <QrCode className="h-5 w-5" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </div>
  );
}
