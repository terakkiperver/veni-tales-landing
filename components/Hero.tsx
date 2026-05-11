"use client";

import Link from "next/link";
import AppPillButton from "@/components/AppPillButton";
import HeroScreenCarousel from "@/components/HeroScreenCarousel";
import VeniWordmark from "@/components/VeniWordmark";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative noise-bg overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Star className="absolute left-[8%] top-[10%] h-6 w-6 text-bg-yellow twinkle" />
        <Star className="absolute right-[12%] top-[20%] h-8 w-8 text-bg-pink twinkle-delay" />
        <Star className="absolute left-[5%] top-[60%] h-5 w-5 text-bg-purple twinkle" />
        <Star className="absolute right-[8%] top-[40%] h-7 w-7 text-accent twinkle-delay" />
        <Sparkle className="absolute left-[45%] top-[15%] h-4 w-4 text-primary-light twinkle" />
        <Sparkle className="absolute right-[40%] top-[70%] h-5 w-5 text-bg-pink twinkle-delay" />
      </div>

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <Link href="/" className="flex items-center">
          <VeniWordmark width={93} />
        </Link>
        <div className="hidden items-center gap-6 text-sm text-primary-light md:flex md:gap-8">
          <a href="#onboarding" className="transition-colors hover:text-primary">
            {t.nav.intro}
          </a>
          <a href="#how" className="transition-colors hover:text-primary">
            {t.nav.howItWorks}
          </a>
          <LanguageToggle />
          <AppPillButton href="https://apps.apple.com/app/venitales" variant="primary">
            {t.nav.download}
          </AppPillButton>
        </div>
      </nav>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-12 lg:pb-32 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-bg-pink/60 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="mb-6 font-display text-5xl font-semibold leading-[1.05] text-primary lg:text-7xl">
              {t.hero.headingLine1}
              <br />
              <span className="font-medium italic">{t.hero.headingLine2}</span>
              <br />
              <span className="relative inline-block">
                {t.hero.headingLine3}
                <Underline className="absolute -bottom-2 left-0 w-full text-accent" />
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-light lg:text-xl">
              {t.hero.description}
            </p>

            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-start">
              <AppPillButton href="https://apps.apple.com/app/venitales" variant="primary">
                <span className="inline-flex items-center justify-center gap-3">
                  <AppleIcon className="h-5 w-5 shrink-0" />
                  <span>App Store</span>
                </span>
              </AppPillButton>
              <AppPillButton href="#how" variant="outline">
                {t.hero.ctaHowItWorks}
              </AppPillButton>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-primary-light">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-bg-cream bg-bg-pink" />
                  <div className="h-8 w-8 rounded-full border-2 border-bg-cream bg-bg-yellow" />
                  <div className="h-8 w-8 rounded-full border-2 border-bg-cream bg-bg-purple" />
                </div>
                <span>{t.hero.socialProof}</span>
              </div>
              <div className="hidden items-center gap-1 sm:flex">
                <Star className="h-4 w-4 fill-current text-bg-yellow" />
                <Star className="h-4 w-4 fill-current text-bg-yellow" />
                <Star className="h-4 w-4 fill-current text-bg-yellow" />
                <Star className="h-4 w-4 fill-current text-bg-yellow" />
                <Star className="h-4 w-4 fill-current text-bg-yellow" />
                <span className="ml-1">4.9</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-8 rounded-[3rem] bg-bg-pink/40 blur-2xl" />
              <div className="relative animate-float rounded-[2.5rem] bg-primary p-2 shadow-2xl">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-bg-cream">
                  <HeroScreenCarousel />
                </div>
              </div>
              <div className="absolute -right-4 -top-4 rotate-6 animate-float-delay rounded-2xl bg-bg-yellow p-3 shadow-lg">
                <Sparkle className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-4 -rotate-6 animate-float rounded-2xl bg-bg-purple p-3 shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.39 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.61 8.26L12 2Z" />
    </svg>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
    </svg>
  );
}

function Underline({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6C40 2 80 2 100 6C120 10 160 10 198 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function AppleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
