"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const next = locale === "en" ? "tr" : "en";
  const label = locale === "en" ? "TR" : "EN";

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      className="rounded-full border border-primary/20 px-2.5 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/5"
      aria-label={`Switch to ${next === "en" ? "English" : "Türkçe"}`}
    >
      {label}
    </button>
  );
}
