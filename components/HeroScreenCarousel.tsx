"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const SCREENS_TR = ["/ss_11.png", "/ss_22.png"];
const SCREENS_EN = ["/ss_11_en.png", "/ss_22_en.png"];
const INTERVAL_MS = 4500;

export default function HeroScreenCarousel() {
  const { t, locale } = useLanguage();
  const SCREENS = locale === "en" ? SCREENS_EN : SCREENS_TR;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SCREENS.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const alts = [t.heroCarousel.screenAlt1, t.heroCarousel.screenAlt2];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black/5">
      {SCREENS.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === active ? "z-[1] opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={src}
            alt={alts[i]}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 90vw, 380px"
            priority={i === 0}
          />
        </div>
      ))}
      <div
        className="pointer-events-none absolute bottom-3 left-0 right-0 z-[2] flex justify-center gap-1.5"
        role="tablist"
        aria-label={t.heroCarousel.tablistLabel}
      >
        {SCREENS.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === active ? "bg-primary" : "bg-primary/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
