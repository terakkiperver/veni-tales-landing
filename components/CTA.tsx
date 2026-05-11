"use client";

import AppPillButton from "@/components/AppPillButton";
import { useLanguage } from "@/components/LanguageProvider";

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
            <div className="flex justify-center">
              <AppPillButton href="https://apps.apple.com/app/venitales" variant="onPrimary">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
