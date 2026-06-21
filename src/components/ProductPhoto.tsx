"use client";

import Image from "next/image";
import type { Flavor } from "@/lib/flavors";

const PHOTOS: Record<string, string> = {
  butter: "/products-webp/butter.webp",
  saffron: "/products-webp/saffron.webp",
  cocoa: "/products-webp/cocoa.webp",
  coconut: "/products-webp/coconut.webp",
};

type Props = {
  flavor: Flavor;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Real product photograph for a flavor. Parent must have a sized container
 * (relative + width/height). Uses object-contain so the tin reads cleanly.
 */
export function ProductPhoto({
  flavor,
  className = "",
  sizes = "(max-width: 768px) 80vw, 600px",
  priority = false,
}: Props) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={PHOTOS[flavor.id]}
        alt={`Melore ${flavor.name} tin with cookies`}
        fill
        sizes={sizes}
        className="object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.45)]"
        priority={priority}
      />
    </div>
  );
}

export function ProductGroupPhoto({
  className = "",
  sizes = "(max-width: 768px) 100vw, 1200px",
  priority = false,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/products-webp/all-four.webp"
        alt="The complete Melore Cookies collection — all four flavors"
        fill
        sizes={sizes}
        className="object-contain"
        priority={priority}
      />
    </div>
  );
}
