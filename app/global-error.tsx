"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg-cream px-6 text-center text-primary">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-3 max-w-md text-sm text-primary-light">
            Veni Tales could not load. Please try again or return to the home page.
          </p>
          {error.digest ? (
            <p className="mt-2 text-xs text-primary/50">Code: {error.digest}</p>
          ) : null}
          <button
            type="button"
            onClick={() => reset()}
            className="mt-8 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-bg-cream transition-opacity hover:opacity-90"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
