"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const SLIDE_VISUALS = [
  { imageSrc: "/splash_1.png", bg: "#FAFBF7", stripe: "#FCCDDC" },
  { imageSrc: "/splash_2.png", bg: "#FCCDDC", stripe: "#FFFF95" },
  { imageSrc: "/splash_3.png", bg: "#FFFF95", stripe: "#83EEA6" },
  { imageSrc: "/splash_4.png", bg: "#83EEA6", stripe: "#F9C365" },
];

export default function OnboardingShowcase() {
  const { t } = useLanguage();

  return (
    <section
      id="onboarding"
      className="relative scroll-mt-24 py-24 lg:py-32"
      style={{ backgroundColor: "#fafbf7" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-display text-4xl font-semibold leading-tight text-primary lg:text-5xl">
            {t.onboarding.heading}
          </h2>
          <p className="mt-4 text-lg text-primary/60">
            {t.onboarding.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {SLIDE_VISUALS.map((visual, i) => {
            const slide = t.onboarding.slides[i];
            return (
              <article
                key={visual.imageSrc}
                className="relative flex flex-col overflow-hidden rounded-[2rem] border border-primary/15 shadow-sm transition-shadow hover:shadow-md"
                style={{ backgroundColor: visual.bg }}
              >
                <div
                  className="absolute right-0 top-0 h-full w-[14%] min-w-[44px] max-w-[76px]"
                  style={{ backgroundColor: visual.stripe }}
                  aria-hidden
                />
                <div className="relative flex flex-1 flex-col px-6 pt-6 pb-8 pr-[15%] sm:px-8 sm:pt-8 sm:pb-8 sm:pr-[18%]">
                  <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-transparent">
                    <Image
                      src={visual.imageSrc}
                      alt={slide.title}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold leading-snug text-primary sm:text-2xl">
                    {slide.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-primary/60">
                    {slide.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
