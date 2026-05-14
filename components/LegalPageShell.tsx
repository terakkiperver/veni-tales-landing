"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import VeniWordmark from "@/components/VeniWordmark";

type Props = {
  title: string;
  updated?: string;
  /** When set, replaces the default “Son güncelleme: …” line (e.g. English “Last updated: …”). */
  updatedLine?: string;
  /** Back link label; defaults to Turkish “← Ana sayfa”. */
  backLabel?: string;
  children: ReactNode;
};

export default function LegalPageShell({
  title,
  updated,
  updatedLine,
  backLabel,
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-bg-cream text-primary noise-bg">
      <header className="border-b border-primary/10 bg-bg-cream/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-6 py-5 lg:px-8">
          <Link
            href="/"
            prefetch={false}
            className="text-sm font-medium text-primary-light transition-colors hover:text-primary"
          >
            {backLabel ?? "← Ana sayfa"}
          </Link>
          <div className="flex shrink-0 items-center gap-3">
            <LanguageToggle />
            <Link
              href="/"
              prefetch={false}
              className="inline-flex items-center"
              aria-label="Veni Tales ana sayfa"
            >
              <VeniWordmark width={72} title="Veni Tales" />
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <h1 className="mb-2 font-display text-3xl font-semibold leading-tight lg:text-4xl">
          {title}
        </h1>
        {updatedLine ? (
          <p className="mb-10 text-sm text-primary-light">{updatedLine}</p>
        ) : updated ? (
          <p className="mb-10 text-sm text-primary-light">Son güncelleme: {updated}</p>
        ) : null}
        <div className="space-y-8 text-base leading-relaxed text-primary-light">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
