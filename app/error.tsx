"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="noise-bg flex min-h-screen flex-col items-center justify-center bg-bg-cream px-6 text-center text-primary">
      <h1 className="font-display text-2xl font-semibold">Bir şeyler ters gitti</h1>
      <p className="mt-3 max-w-md text-sm text-primary-light">
        Sayfa yüklenirken beklenmeyen bir hata oluştu. Tekrar deneyebilir veya ana sayfaya
        dönebilirsiniz.
      </p>
      {error.digest ? (
        <p className="mt-2 text-xs text-primary/50">Kod: {error.digest}</p>
      ) : null}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-bg-cream transition-opacity hover:opacity-90"
        >
          Tekrar dene
        </button>
        <Link
          href="/"
          className="rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
        >
          Ana sayfa
        </Link>
      </div>
    </div>
  );
}
