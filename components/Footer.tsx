"use client";

import Link from "next/link";
import VeniWordmark from "@/components/VeniWordmark";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-primary/10 bg-bg-cream py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <Link href="/" className="mb-3 inline-flex items-center">
              <VeniWordmark width={93} title="Veni Tales" />
            </Link>
            <p className="max-w-sm text-sm text-primary-light">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-6 text-sm md:justify-end">
            <Link href="/privacy" className="text-primary-light transition-colors hover:text-primary">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="text-primary-light transition-colors hover:text-primary">
              {t.footer.terms}
            </Link>
            <Link href="/support" className="text-primary-light transition-colors hover:text-primary">
              {t.footer.support}
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-primary/40 md:text-left">
          © {new Date().getFullYear()} Veni Tales. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
