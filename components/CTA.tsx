"use client";

import AppPillButton from "@/components/AppPillButton";
import { AppleIcon, PlayIcon } from "@/components/StoreIcons";
import { useLanguage } from "@/components/LanguageProvider";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/storeLinks";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-10 text-center lg:p-16">
          <div className="absolute left-6 top-6 h-12 w-12 rotate-12 rounded-2xl bg-bg-pink opacity-90" />
          <div className="absolute right-10 top-10 h-8 w-8 -rotate-12 rounded-xl bg-bg-yellow" />
          <div className="absolute bottom-8 left-12 h-10 w-10 rotate-6 rounded-2xl bg-bg-purple" />
          <div className="absolute bottom-6 right-6 h-14 w-14 -rotate-6 rounded-2xl bg-accent" />

          <div className="relative">
            <h2 className="mb-6 font-display text-4xl font-semibold leading-tight text-bg-cream lg:text-6xl">
              {t.cta.headingLine1}
              <br />
              <span className="font-medium italic text-accent">
                {t.cta.headingLine2}
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-bg-cream/80">
              {t.cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AppPillButton href={APP_STORE_URL} variant="onPrimary" ariaLabel="App Store">
                <span className="inline-flex items-center justify-center gap-3">
                  <AppleIcon className="h-5 w-5 shrink-0" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-medium opacity-80">
                      {t.cta.appStoreFrom}
                    </span>
                    <span className="block">{t.cta.download}</span>
                  </span>
                </span>
              </AppPillButton>
              <AppPillButton href={PLAY_STORE_URL} variant="onPrimary" ariaLabel="Google Play">
                <span className="inline-flex items-center justify-center gap-3">
                  <PlayIcon className="h-5 w-5 shrink-0" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-medium opacity-80">
                      {t.cta.playStoreFrom}
                    </span>
                    <span className="block">{t.cta.download}</span>
                  </span>
                </span>
              </AppPillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
