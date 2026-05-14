import type { Metadata } from "next";
import dynamic from "next/dynamic";

const TermsClientPage = dynamic(() => import("./TermsClientPage"), {
  ssr: true,
  loading: () => (
    <div
      className="min-h-screen bg-bg-cream text-primary"
      aria-busy="true"
      aria-label="Yükleniyor"
    >
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-4 h-10 w-2/3 animate-pulse rounded-lg bg-primary/10" />
        <div className="mb-10 h-4 w-40 animate-pulse rounded bg-primary/10" />
        <div className="space-y-4">
          <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
          <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-primary/10" />
        </div>
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Terms of use / Kullanım koşulları — Veni Tales",
  description:
    "Terms governing use of Veni Tales, subscriptions, and liability. Veni Tales kullanım şartları, abonelikler ve sorumluluklar.",
};

export default function TermsPage() {
  return <TermsClientPage />;
}
